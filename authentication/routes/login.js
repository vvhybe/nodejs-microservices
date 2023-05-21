const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const loginRoute = async (req, res)=>{
    const { email, password } = req.body;
    try{
        // check user credentials
        const user = await User.findOne({ email });
        if(!user) return res.status(404).json({ error: "User not found" });

        // check password
        if(! await bcrypt.compare(password, user.password)) return res.status(401).json({ error: "Invalid credentials" });

        // generate jwt token, expires in 1 day
        jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 3600 * 24}, (error, token)=>{
            if(error) throw error;
            res.status(200).json({ token });
        });

    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
}

module.exports = loginRoute;
