const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const { request } = require('express');
const app = express();
const moment = require('moment')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://shilpikumari:shilpi1234@cluster0.phpas.mongodb.net/shilpikumari", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (

    function(req,res,next){
    const timeAndDate = moment().format('MM dd yyyy,hh:mm:ss a');
    const ipAddress = req.ip
    const path = req.path
    res.send("global middleware")
    console.log(timeAndDate,ipAddress,path)
    next()
}
);
 app.use('/',route);

 


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
