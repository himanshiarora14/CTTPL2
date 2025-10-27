import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Enable CORS for your frontend(s)
app.use(
  cors({
    origin: ["http://localhost:5173", "https://choudharytours.in"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// ✅ Health check
app.get("/", (req, res) => {
  res.send("✅ Server is running fine");
});

// ✅ Email route
app.post("/sendemail", async (req, res) => {
  console.log("[POST] /sendemail", req.body);

  const { name, email, countryCode, phone, serviceType, country, date, travellers, requirements } = req.body;

  if (!name || !email || !phone || !serviceType) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // ✅ Transporter for Gmail (using App Password)
    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  logger: true,
  debug: true, // shows SMTP communication in console
});


    // ✅ Email content
    const mailOptions = {
      from: `"Choudhary Tours Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: `New Enquiry: ${serviceType}`,
      html: `
        <h2>New On Spot Rental Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>No. of Travellers:</strong> ${travellers}</p>
        <p><strong>Requirements:</strong> ${requirements || "N/A"}</p>
        <hr/>
        <p>Sent via <strong>choudharytours.in</strong></p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);

    res.status(200).json({ message: "✅ Enquiry sent successfully!" });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
