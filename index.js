import express from "express";
import emailRoute from "./routes/email.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", emailRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
