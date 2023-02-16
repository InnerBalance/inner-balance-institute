import express from "express";
import contact from "./api/contact.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contact);

app.listen(3000);
