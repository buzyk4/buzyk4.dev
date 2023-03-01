require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: 'New message from contact form',
      html: `
        <p>You have a new message from your website contact form:</p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Message: ${message}</li>
        </ul>
      `,
    });

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});