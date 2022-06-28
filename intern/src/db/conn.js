const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/group-69-Database", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDb is connected")
}).catch((e) => {
    console.log(e);
});