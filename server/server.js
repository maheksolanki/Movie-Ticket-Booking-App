import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3000;

//middleware
app.use(express.json()); // use to parse the json data to req.body
app.use(cors()); //	Allows frontend to talk to backend (CORS)

//API Routes
app.get('/',(req,res)=>{
  res.send("server is Live!");
})
app.listen(port , ()=>{
  console.log(`server running on port ${port}`);
})