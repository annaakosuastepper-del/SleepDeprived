const express = require('express')
const router = express.Router()
const Profile = require('./profile.model')

//GET one profile by name
router.get('/profiles/:name', async(req, res) => {
    console.log( 'Looking for:',req.params.name)
    const profile = await Profile.find()
    console.log('All profiles', profile)
    res.json(profile)
})

//get 
router.get('/profiles/', async(req, res) => {
    console.log( 'Looking for:',req.params.name)
    const profile = await Profile.find()
    console.log('All profiles', profile)
    res.json(profile)
})

//PUT - update a profile
router.put('/profiles/:name', async(req,res) => {
    const{_id, ...updateData} = req.body;
    const profile = await Profile.findOneAndUpdate(
    {name: req.params.name},
    {$set: updateData},
    {returnDocument: 'after'} //from the console
)
    res.json (profile)
})

//DELETE one box from a profile
router.delete('/profiles/:name/boxes/:boxIndex', async(req, res)=> {
    const profile = await Profile.findOne({name: req.params.name})
    profile.boxes.splice(req.params.boxIndex, 1)
    await profile.save()
    res.json(profile)
})


module.exports = router
