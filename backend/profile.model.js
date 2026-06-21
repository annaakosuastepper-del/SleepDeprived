const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    name: String,
    bio: String,
    role: String,
    profilePicture: String,
    boxes: [{title: String, content:String}],
    files: [String],

})

module.exports = mongoose.model('Profile',profileSchema)