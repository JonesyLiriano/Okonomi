import * as functions from 'firebase-functions';
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors')({
  origin: true
});

export const contactEmailSend = functions.https.onRequest((req, res) => {
    return cors(req, res, () => {
  const { name, email, phone, message } = req.body;
    const text = `<div>
      <h4>Informacion</h4>
      <ul>
        <li>
          Nombre - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
        <li>
          Telefono - ${phone || ""}
        </li>
      </ul>
      <h4>Mensaje:</h4>
      <p>${message || ""}</p>
    </div>`;
    const sesAccessKey = functions.config().gmail.email;
    const sesSecretKey = functions.config().gmail.password;

    const transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      auth: {
        user: sesAccessKey,
        pass: sesSecretKey
      }
    }));
    const mailOptions = {
      to: "okonomiws1@gmail.com",
      from: "Okonomi Web Services",
      subject: `${name} ha enviado un mensaje`,
      text: text,
      html: text
    };

  transporter.sendMail(mailOptions, function (error: { message: any; }, info: any) {
      if (error) {
        console.log(error.message);
      }
      res.status(200).send({
        message: "success"
      })
    });
  })
});
