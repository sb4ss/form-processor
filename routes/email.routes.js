const express = require("express");
const sendEmailToMe = require("../controller/sendEmailToMe");
const router = express.Router();

router.post("/send", sendEmailToMe);

module.exports = router;
