const mongoose = require('mongoose');
const schema = mongoose.Schema;

let PlaylistSchema = new schema({
    name:{
        type: String,
        required :true,
    },
    email:{
        type :String,
        required : true,
    }
})

module.exports = mongoose.model('student', PlaylistSchema);