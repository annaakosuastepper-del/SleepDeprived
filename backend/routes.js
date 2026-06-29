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
//push() — adds to the end of the array
//unshift() — adds to the beginning
//pop() — removes the last item
//shift() — removes the first item
//splice() — removes/replaces at a specific index (what you used for delete)

//DELETE one box from a profile
router.delete('/profiles/:name/boxes/:boxIndex', async(req, res)=> {
    const profile = await Profile.findOne({name: req.params.name})
    profile.boxes.splice(req.params.boxIndex, 1)
    await profile.save()
    res.json(profile)
})

//POST add a box to the profile

router.post('/profiles/:name/boxes', async(req, res) =>{
    const newBox = await Profile.findOne({name: req.params.name})
    newBox.boxes.push(req.body)
    await newBox.save()
    res.json(newBox)
})

module.exports = router
