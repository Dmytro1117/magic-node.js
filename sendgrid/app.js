const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SEND_GRIN_API_KEY } = process.env;

sgMail.setApiKey(SEND_GRIN_API_KEY);

const email = {
  to: "moiseenkodmitriy@ukr.net",
  from: "moiseenkodmitriy@i.ua",
  subject: "Test email",
  html: "<p><strong>Test email</strong> from localhost:3000</p>",
};

sgMail
  .send(email)
  .then(() => console.log("Email send success"))
  .catch((error) => console.log(error.message));
