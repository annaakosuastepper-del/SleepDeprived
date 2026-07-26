const bcrypt = require('bcrypt')
const User = require('./user.model')

router.post('/user', async(req, res) => {
   let username = req.body.username;
   let password = req.body.password;
   let role = req.body.role;

    const hashedPassword = await bcrypt.hash(password, 10);
  

    const user = new User({
        username: username,
        password: hashedPassword, 
    })

    await user.save();
    res.json(user);
})