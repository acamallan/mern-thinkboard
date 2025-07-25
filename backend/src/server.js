import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5001;

connectDB();

//middleware
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use("/api/notes", notesRoutes)


app.listen(PORT, () => {
    console.log("server started at port: " + PORT)
})