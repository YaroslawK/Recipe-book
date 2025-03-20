import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import recipesRouter from "./routes/recipes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/recipes", recipesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));