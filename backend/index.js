import express from 'express'
import { configDotenv } from 'dotenv'
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import interviewRouter from './routes/interview.route.js';

configDotenv()
const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials:true
}))

app.use(express.json())
app.use(cookieParser())
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path} - Cookies:`, req.cookies);
  next();
});

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/interview",interviewRouter)
const PORT= process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on Port : ${PORT}` );
  connectDB();
})