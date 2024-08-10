import nodemailer from "nodemailer";

// Setup Nodemailer transport
export const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false, // use SSL
  auth: {
    user: "3d93204473e4bf",
    pass: "b1590f110a5243",
  },
});
