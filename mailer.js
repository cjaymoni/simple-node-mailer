import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  // service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_ACCOUNT_USER,
    pass: process.env.MAIL_ACCOUNT_PASSWORD,
  },
  greetingTimeout: 100000,
  tls: {
    // Specify the TLS version (TLSv1.2 or TLSv1.3)
    minVersion: "TLSv1.3", // Adjust the version as needed
  },
});

export const SENDMAIL = async (mailDetails, callback) => {
  try {
    const info = await transporter.sendMail(mailDetails);
    callback(info);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
