const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

const registerRoute = async (req, res)=>{
    const { name, email, password } = req.body;
    try{
        // check if user already exists
        if (await User.findOne({email})) return res.status(400).json({ error: "User already exists" });

        // create new user
        const user = new User({ name, email, password: await bcrypt.hash(password, 10) });

        // save user
        await user.save();

        // generate jwt token, expires in 1 day
        jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 3600 * 24}, (error, token)=>{
            if(error) throw error;
            res.status(201).json({ user, token });
        });

    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
}

module.exports = registerRoute;
