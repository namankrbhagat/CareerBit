import jwt from "jsonwebtoken"

export const generateToken = async (userId,res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  })

  const isProd = process.env.NODE_ENV === "production";
  
  res.cookie("token", token, {
    httpOnly: true, // fix typo (was http: true)
    secure: isProd, // Must be true for SameSite='none'
    sameSite: isProd ? "none" : "strict", // 'none' is exactly required for cross-domain Vercel to Render communication
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
}