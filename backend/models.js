const {model , Schema} = require("mongoose")

const IMGSchema = new Schema({
    _id: String,
    dataslot: String,
    image: String,
    postDate:{type:Date , default:Date.now},
});


const IMGModel= model("datas" , IMGSchema);

module.exports = IMGModel;