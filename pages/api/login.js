import connectToDatabase from "../db";
import user from "../../models/user";

connectToDatabase();

//login function
export default async function handler(req, res){
    const {username, password} = req.body;
    const newUser = await user.findOne({username, password});
    if(!newUser){
        res.status(401).json({success:false, message:"Invalid username or password"});
    }else{
        res.status(200).json({success:true, message:"User logged in", newUser});
    }
}