const nodemailer = require("nodemailer");

async function main() {
  // create test account
  let testAccount = await nodemailer.createTestAccount();

  // transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  // send mail
  let info = await transporter.sendMail({
    from: '"Test Sender" <test@example.com>',
    to: "test@example.com",
    subject: "Hello ✔",
    text: "This is a test email!",
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
