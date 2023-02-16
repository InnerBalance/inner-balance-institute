import express from "express";
import contact from "./api/contact.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contact);

app.listen(3000);
