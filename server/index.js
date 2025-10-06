import express from "express";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(cors());

app.get("/health",(req,res)=>{
    res.json({status:"Ok",message:"server is healthy"});
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});