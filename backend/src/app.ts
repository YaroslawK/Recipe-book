import express from "express";
import cors from "cors";
import recipesRoutes from "./routes/recipes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", recipesRoutes); // Всі запити до API йдуть через цей префікс

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
