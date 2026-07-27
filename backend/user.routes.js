const bcrypt = require('bcrypt')
const User = require('./user.model')
 const jwt = require('jsonwebtoken')

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

router.post('/login', async(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    
    const user =  await User.findOne({username: username});

    const match = await bcrypt.compare(password, user.password);
    if(match){
        const token = jwt.sign({username: user.username, role: user.role}, 'secretkey')
        res.json({token: token, user: user})
    }
    else{
        res.status(401).json({message: 'username/password wrong'})        
    }
})