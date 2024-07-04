import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const body = await request.json();

  // send an email to yourself
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER!,
    to: "samarpit.santoki@gmail.com",
    replyTo: body.email,
    subject: body.subject,
    text: body.message,
  };

  const send = await transporter.sendMail(mailOptions);

  if (send.messageId) {
    return Response.json({ message: "Email sent" });
  } else {
    return Response.json({ message: "Email not sent" });
  }
}
