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

async function run() {
  const mailSent = await transporter.sendMail({
    text: "Text E-mail",
    subject: "Subjetc e-mail",
    from: ["Seller1 <seller1@gmail.com", ],
    to: ["Buyer1autoauction@gmail.com", "sylvynhaarc@hotmail.com"],
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

run();