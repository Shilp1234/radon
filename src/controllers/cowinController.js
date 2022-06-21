let axios = require("axios")

//----------------------------------- GET DISTRICT ID ----------------------------------------------------------

let getdistrictId = async function(req,res){
    try{
        let id = req.query.id
        let date = req.query.date
        console.log(id, date)
        var options = {
            method: "get",
            url:`http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
       let dk = result.data
        res.status(200).send({ msg: dk,status:true })
    }
    catch (err) {
       // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//******************************************** WEATHER HANDING *********************************************************
const getSortedCities = async function(req,res){
    try{
        let cities = ["Siwan","Patna","Bangluru","Singapur","Jaipur","London","Sikkim","Delhi"]
        let cityObjArr = []

        for(let x=0; x<cities.length; x++){

            let obj = {city:cities[x]}
            let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[x]}&appid=c5a07a5f1ba8b10f0e5cb28b018f097a`)
            console.log(response.data.main.temp)

            obj.temp = response.data.main.temp
            cityObjArr.push(obj)
        }
        let sortArr = cityObjArr.sort(function(a,b){return a.temp - b.temp})
        console.log(sortArr)
        res.status(200).send({status:true,data:sortArr})
    }
    catch(error){
        console.log(error)
        res.status(500).send({status:false,msg:"server error"})
    }
}

//--------------------------------------------- MEME -------------------------------------------------------------------

let meme = async function(req,res){
    try{
        let options = {
            methos : "post",
            url : 'https://api.imgflip.com/caption_image'
        }
        let result = await axios(options)

        res.status(200).send({data:result.data,status:true})
    }
    catch(error){
        console.log(error)
        res.status(500).send({status:false,msg:"server error"})
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getdistrictId = getdistrictId
module.exports.getSortedCities = getSortedCities
module.exports.meme = meme
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
