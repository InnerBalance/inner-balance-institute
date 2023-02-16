import * as dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
dotenv.config();

const router = express.Router();

const contactAddress = "hemsundar.paranthaman@outlook.com";

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

router.post("/", function (req, res) {
  mailer.sendMail(
    {
      from: req.body.from,
      to: [contactAddress],
      subject: req.body.subject || "[No subject]",
      html: req.body.message || "[No message]",
    },
    function (err) {
      if (err) return res.status(500).send(err);
      res.json({ success: true });
    }
  );
});

export default router;
