"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

function ContactSection() {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message:
      "Hi Samarpit,\n\nI'm reaching out to discuss a new project. I'd love to hear more about your availability and rates.\n\nBest,\n[Your Name]",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.message === "Email sent") {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message:
            "Hi Samarpit,\n\nI'm reaching out to discuss a new project. I'd love to hear more about your availability and rates.\n\nBest,\n[Your Name]",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.section
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-800">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m always excited to discuss new projects and opportunities.
              Feel free to reach out and let&apos;s chat!
            </p>
          </div>
          <motion.div
            className="mx-auto w-full max-w-sm space-y-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                className="max-w-lg flex-1"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                className="max-w-lg flex-1"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                className="max-w-lg flex-1"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Message"
                className="max-w-lg min-h-[150px]"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button
                type="submit"
                className="self-end bg-purple-600 hover:bg-purple-700 text-white"
                disabled={sending}
              >
                {sending ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ContactSection;
