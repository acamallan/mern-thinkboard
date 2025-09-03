import User from "../models/User.js";

 export async function postUser(req, res) {
    const {email_address, password } = req.body;
    if(!email_address || !password) {
        return res.status(400).json({sucess:false, message: "Please provide all fields"});
    }
     try {
        
        const newUser = new User({email_address, password})
        await newUser.save();
        res.status(201).json({message: "user created successfully"})
     } catch (error) {
        console.error("Error in postUser controller", error)
        res.status(500).json({message: "Internal server error"})
     }
    
 }