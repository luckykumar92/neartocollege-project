import nodemailer from "nodemailer";
import dotenv from "dotenv";

//Config
dotenv.config({
  path: "./.env",
});

const EMAIL = process.env.EMAIL;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
// const SMTP_HOST = process.env.SMTP_HOST;
// const SMTP_PORT = process.env.SMTP_PORT;

const mailSender = async ([...email], subject, content) => {
  // console.log(email);
  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: SMTP_PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  try {
    let mailOptions = {
      from: `Neartocollege ${EMAIL}`,
      to: [...email],
      subject: subject,
      html: content,
    };
    const response = await transporter.sendMail(mailOptions);
    // return response;
    return null;
  } catch (error) {
    // console.log(error);
    // return res.json({ message: "Mail Sent failed" });
    return null;
  }
};

export { mailSender };
//  res.status(200).json({
//    success: true,
//    message: "User Deleted Successfully",
//  });
