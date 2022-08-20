const PublisherModel= require("../models/publisherModel")

//******************************Create Publisher************************************//
const createPublisher= async function (req, res) {
    let publisherData = req.body
    let publisherCreated = await PublisherModel.create(publisherData)
    res.send({data: publisherCreated})
}

//******************************Find Publisher************************************//
const getPublisherData= async function (req, res) {
    let publisher = await PublisherModel.find()
    res.send({data: publisher})
}

//******************************Decleration Publically************************************//
module.exports.createPublisher= createPublisher
module.exports.getPublisherData = getPublisherData
