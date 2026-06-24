const express = require('express')
const router = express.Router()
const Profile = require('./profile.model')

//GET one profile by name
router.get('/profiles/:name', async(req, res) => {
    console.log( 'Looking for:',req.params.name) //change to id
    const profile = await Profile.find()
    console.log('All profiles', profile)
    res.json(profile)
})

//GET all
router.get('/profiles', async(req, res) => {
    const profile = await Profile.find()
    res.json(profile)
})

//PUT - update a profile
router.put('/profiles/:name', async(req,res) => {
    await Profile.findOneAndUpdate({name: req.params.name})
    res.json (profile)
})

//DELETE one box from a profile
router.put('/profiles/:name/boxes/:boxIndex', async(req, res)=> {
    const profile = await Profile.findOne({name: req.params.name})
    profile.boxes.splice(req.params.boxIndex, 1)
    await profile.save()
    res.json(profile)
})


module.exports = router
