import nodemailer from "nodemailer";

export const verificationEmail = async (email, verificationToken) => {
  const verifyUrl = `${process.env.DOMAIN}/api/users/verify-email?token=${verificationToken}`;

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  const mailOptions = {
    from: "sufidemo@gmail.com",
    to: email,
    subject: "Email Verification",
    html: `<p>Click the link to verify your email: <a href="${verifyUrl}">${verifyUrl}</a></p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent %s", info.messageId);
    return info;
  } catch (error) {
    console.log("Error in mails", error);
    throw new Error("Failed to send verification email");
  }
};
