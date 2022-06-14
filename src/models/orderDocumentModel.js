const mongoose = require('mongooge');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderDocumentSchema = new mongoose.Schema({
       userId:{
        type:ObjectId,
        ref:'UserDocument'
    },
	productId:{
        type:ObjectId,
        ref:'ProductDocument'
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date:{
        type:String,
        required:true
    }
},{ timestamps: true })
module.exports = mongoose.model('OrderDocument',orderDocumentSchema)
