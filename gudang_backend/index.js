import express from "express";
import cors from "cors";
import GudangRoute from "./routes/GudangRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(GudangRoute)

app.listen(5000, () => console.log('Server Up and Running...'));