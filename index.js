import { SENDMAIL } from "./mailer.js";
import SUCCESS_HTML_TEMPLATE from "./success-mail-template.js";

const message = "Hi there, you were emailed me through nodemailer";
const options = {
  from: "TESTING <sender@gmail.com>", // sender address
  to: "judeclottey1@gmail.com", // receiver email
  subject: "Send email in Node.JS with Nodemailer using Gmail account", // Subject line
  text: message,
  html: SUCCESS_HTML_TEMPLATE("dhims", "100kb"),
};
SENDMAIL(options, (info) => {
  console.log("Email sent successfully");
  console.log("MESSAGE ID: ", info.messageId);
});
