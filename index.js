import express from "express";
import emailRoute from "./routes/email.routes.js"; // Asegúrate de usar .js

const app = express();

app.use(express.json());
app.use("/api", emailRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
