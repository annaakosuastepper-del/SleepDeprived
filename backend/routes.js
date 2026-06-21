const express = require('express')
const router = express.Router()
const Profile = require('./profile.model')

//GET all profiles
router.get('/profiles', async(req, res) => {
    const profiles = await Profile.find()
    res.json(profiles)
})

//POST - create new Profile
router.get('/profiles', async(req, res) => {
    const profile = await Profile(req.body)
    await profile.save()
    res.json(profile)
})

//GET one profile by name
router.get('/profiles', async(req, res) => {
    const profile = await Profile.findOne({name: req.params.name})
    res.json(profile)
})

//PUT - update a profile
router.put('/profiles/:name', async(req,res) => {
    await Profile.findOneAndUpdate({name: req.params.namea})
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
