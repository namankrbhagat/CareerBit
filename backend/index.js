import express from 'express'
import { configDotenv } from 'dotenv'

configDotenv()
const app = express();
const PORT= process.env.PORT || 8000;

app.get('/',(req,res) => {
  return res.json({message : "Server Started"})
})

app.listen(PORT, () => {
  console.log(`Server running on Port : ${PORT}` );
})