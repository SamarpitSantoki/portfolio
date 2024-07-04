"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function ContactSection() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    // You can use the form data to send a POST request to an API
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // send an email to yourself
    fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message === "Email sent") {
          alert("Email sent successfully!");
        } else {
          alert("Email not sent. Please try again later.");
        }

        setSending(false);
      })
      .catch((error) => {
        setSending(false);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m always excited to discuss new projects and opportunities.
              Feel free to reach out and let&apos;s chat!
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2" onSubmit={onSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                className="max-w-lg flex-1"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                className="max-w-lg flex-1"
              />
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                className="max-w-lg flex-1"
              />
              <Textarea
                name="message"
                placeholder="Message"
                className="max-w-lg "
                defaultValue={
                  "Hi Samarpit,\n\nI'm reaching out to discuss a new project. I'd love to hear more about your availability and rates.\n\nBest,\n[Your Name]"
                }
              />
              <Button type="submit" className="self-end" disabled={sending}>
                {sending ? (
                  <span className="animate-spin h-5 w-5  border-t-2  border-white rounded-full" />
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
