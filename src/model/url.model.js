const {Schema, model} = require("mongoose");


const UrlSchema = new Schema({
    longurl: {
        type: String,
        required: true,
    },
    shorturl: {
        type:String,
        required:true,
        unique:true,
    }
},{
    timestamps:true,
    versionKey:false,
})


module.exports = model("url", UrlSchema )