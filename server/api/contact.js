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
  console.log(req.body);
  mailer.sendMail(
    {
      to: [contactAddress],
      subject: req.body.from,
      html: `
        <b>Name</b>: ${req.body.name}<br />
        <b>Phone</b>: ${req.body.phone}<br />
        <b>Email</b>: ${req.body.email}<br />
        <b>Preferred Days</b>: ${req.body.preferredDays}<br />
        <b>Preferred Time</b>: ${req.body.preferredTime}<br />
        <b>Preferred Time</b>: ${req.body.message}<br />
      `,
    },
    function (err) {
      if (err) return res.status(500).send(err);
      res.json({ success: true });
    }
  );
});

export default router;
