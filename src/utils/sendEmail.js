import nodemailer from "nodemailer";

const EMAIL = process.env.EMAIL;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
// const SMTP_HOST = process.env.SMTP_HOST;
// const SMTP_PORT = process.env.SMTP_PORT;

const sendEmail = async ([...email], subject, content) => {
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
    return { success: "true", message: "Mail Sent successfully" };
  } catch (error) {
    return { success: "false", message: "Mail Sent failed" };
  }
};

export { sendEmail };
