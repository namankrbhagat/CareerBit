import { generateToken } from "../config/token.js"
import User from "../models/user.model.js"


export const googleAuth = async (req,res) => {
  try {
    const {name,email} =req.body

    let user = await User.findOne({email})
    if(!user){
      user = await User.create({
        name,email
      }) 
    }
    const token = await generateToken(user._id,res)
    return res.status(200).json({ user, token })
  } catch (error) {
    return res.status(500).json({message:`Google auth error ${error}`})
  }
}

export const logout = async(req,res) => {
  try {
    await res.clearCookie("token")
    return res.status(200).json({message:"Logout Successfully"})
  } catch (error) {
    return res.status(500).json({message:`Logout error ${error}`})
  }
}