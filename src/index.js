const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendemail(email, username) {
  const mailSent = await transporter.sendMail({
    text: "Text E-mail",
    subject: "Welcome ",
    from: ["Seller1 <seller1@gmail.com", ],
    to: [email, "sylvynhaarc@hotmail.com"],
    html: `
    <html>
    <body>
      <strong> ${username} Welcome to Auto Auction application. </strong></br>
    </body>
  </html> 
    `,
  });

  console.log(mailSent);
}

//run();




module.exports = sendemail;