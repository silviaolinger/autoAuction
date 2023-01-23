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

async function sendemail(email) {
  const mailSent = await transporter.sendMail({
    text: "Text E-mail",
    subject: "Subjetc e-mail",
    from: ["Seller1 <seller1@gmail.com", ],
    to: [email, "sylvynhaarc@hotmail.com"],
    html: `
    <html>
    <body>
      <strong>Please direct contact me at:77899-000 in order to discuss the price</strong></br>Do E-mail
    </body>
  </html> 
    `,
  });

  console.log(mailSent);
}

//run();


const testFunction = () => {
  console.log('this is a test')
}

module.exports = sendemail;