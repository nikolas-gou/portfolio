import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = `${req.body.firstName} ${req.body.lastName}`;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    const mail = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html: `
            <div style="font-family: Arial; padding: 20px;">
            <h2>📩 New Contact Message</h2>
            <hr />
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <br/>
            <p><b>Message:</b></p>
            <p style="background:#f5f5f5; padding:10px; border-radius:5px;">
                ${message}
            </p>
            </div>
            `,
    };

    contactEmail.sendMail(mail, (error, info) => {
        if (error) {
            console.log(error);
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});
