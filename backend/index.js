require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/sendemail', async (req, res) => {
  try {
    const {
      name,
      email,
      countryCode = '',
      phone,
      serviceType,
      country,
      date,
      travellers,
      requirements,
    } = req.body;

    const phoneWithCode = `${countryCode || ''}${phone}`;

    const mailOptions = {
      from: `"On Spot Rentals" <${name}>`,
      to: process.env.EMAIL_USER,
      subject: `New Rental Enquiry from ${name}`,
      html: `
        <h3>New Rental Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneWithCode}</p>
        <p><strong>Service Type:</strong> ${serviceType || 'N/A'}</p>
        <p><strong>Country:</strong> ${country || 'N/A'}</p>
        <p><strong>Date:</strong> ${date || 'N/A'}</p>
        <p><strong>Travellers:</strong> ${travellers || 'N/A'}</p>
        <p><strong>Requirements:</strong> ${requirements || 'N/A'}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    const previewUrl = nodemailer.getTestMessageUrl ? nodemailer.getTestMessageUrl(info) : null;

    res.json({
      success: true,
      message: 'Email sent successfully',
      info,
      previewUrl,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
