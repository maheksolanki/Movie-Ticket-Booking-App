import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { clerkMiddleware} from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import showRouter from "./routes/showRoutes.js";

const app = express();
const port = 3000;

await connectDB(); // this is for connecting db from db.js file

//middleware
app.use(express.json()); // use to parse the json data to req.body
app.use(cors()); //	Allows frontend to talk to backend (CORS)
app.use(clerkMiddleware());

//API Routes
app.get("/", (req, res) => {
  res.send("server is Live!");
});
app.use(
  "/api/inngest",
  serve({
    client: inngest,
    signingKey: process.env.INGGEST_SIGNING_KEY,
    functions,
    resync: true,
  })
); // api endpoin for inngest
app.use('/api/show' , showRouter);


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
