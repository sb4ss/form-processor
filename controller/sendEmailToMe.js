import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailToMe = async (req, res) => {
  try {
    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["sebaszapata2022@gmail.com"],
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("❌ Error enviando el correo:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export default sendEmailToMe;
