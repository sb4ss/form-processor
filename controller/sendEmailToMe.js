import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailToMe = async (req, res) => {
  const info = req.body;
  let name = info.name;
  let message = info.message;
  let from = info.from;
  let asunto = info.subject;
  try {
    const { data } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["sebaszapata2022@gmail.com"],
      subject: `${asunto}`,
      html: `
            <h3>${name}</h3>
            <p>${message}</p>
            <p>${from}</p>
      `,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("❌ Error enviando el correo:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export default sendEmailToMe;
