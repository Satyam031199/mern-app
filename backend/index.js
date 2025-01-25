import express from "express";
import cors from "cors";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
import { User } from "./models/User.model.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

connectDB();

app.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
