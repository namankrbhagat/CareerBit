import jwt from "jsonwebtoken"

export const generateToken = async (userId,res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  })

  const isProd = process.env.NODE_ENV === "production";
  
  res.cookie("token", token, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })

  return token  // Return token so it can be sent in response body
}