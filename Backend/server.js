import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, email, phone, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail", // or SMTP service
    auth: {
      user: "veechaintech@gmail.com",
      pass: "uexs oivj tjyx tgzj", // Use App Password
    },
  });

  let mailOptions = {
    from: email,
    to: "veechainteech@gmail.com",
    subject: `New Project Query from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("success");
  } catch (error) {
    console.error(error);
    res.send("error");
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

