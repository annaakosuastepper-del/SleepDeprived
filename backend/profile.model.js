const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    name: String,
    bio: String,
    role: String,
    headerImage: String,
    profilePicture: String,
    boxes: [{title: String, content:String}],
    files: [String],
    bioColor: String,
    boxColor: String,
    cvHeader: String,
    fileBoxColor: String,
    fileColor: String,
    roleColor: String,
    pictureFrame: String,
    skillsColor: String,
    skills: String,
   socialLinks: [{ platform: String, url: String }]

})

module.exports = mongoose.model('Profile',profileSchema)