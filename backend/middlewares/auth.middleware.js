import jwt from "jsonwebtoken"
export const isAuth = async (req,res,next) => {
  try {
    // Accept token from cookie OR Authorization header (for cross-domain deployments)
    let token = req.cookies?.token
    
    if (!token) {
      const authHeader = req.headers['authorization']
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1]
      }
    }

    if(!token){
      return res.status(401).json({message:"User doesn't have token"})
    }

    const verifyToken = jwt.verify(token,process.env.JWT_SECRET)
    if(!verifyToken){
      return res.status(401).json({message:"User doesn't have a valid token"})
    }

    req.userId = verifyToken.userId
    next();
  } catch (error) {
    return res.status(500).json({message:`isAuth error ${error}`})
  }
}