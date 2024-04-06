const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title :{
        type : String,
        required : [true, "post must have title"]
    },
    body : {
        type : String,
        required: [true, "body must contain words"]
    }

});

const post = mongoose.model("post",postSchema);
module.exports = post;