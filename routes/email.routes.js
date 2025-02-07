import express from "express";
import sendEmailToMe from "../controller/sendEmailToMe.js"; // Asegúrate de usar `.js`

const router = express.Router();

// Usa la función importada como callback
router.post("/send", sendEmailToMe);

export default router; // Exporta el router como módulo
