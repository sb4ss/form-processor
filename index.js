const express = require("express");
const app = express();

app.use(express.json());
const emailRoute = require("./routes/email.routes");
app.use("/api", emailRoute);
// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
