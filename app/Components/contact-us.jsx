import { LampContainer } from "@/components/ui/lamp";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { WorldMap } from "@/components/ui/world-map";
import { PinPerspective } from "@/components/ui/3d-pin";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setloading(false);
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message. Try again later.");
        setloading(false);
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
      setloading(false);
    }
  };

  return (
    <div className="h-screen items-center bg-black px-8">
      <div className="text-center bg-black p-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1.1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1.1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="text-5xl font-extrabold text-slate-100"
          >
            Contact Us
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            ease: "easeIn",
          }}
        >
          <p className="text-lg text-slate-300 mt-4">
            Have questions or need assistance? Reach out to us we’re here to
            help!
          </p>
        </motion.div>
      </div>
      <div className=" flex justify-center items-center  px-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left Side: Details */}
          <motion.div
            className="bg-gradient-to-br from-zinc-900 to-slate-900 text-white p-10 md:w-1/2 flex flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="mb-4 text-lg">
              We are always looking for ways to improve our products and
              services. Contact us and let us know how we can help you.
            </p>
            <div className="flex justify-between">
              <p className="mb-4  text-sm text-zinc-300">info@softxpertz.lk</p>
              <p className="mb-4">+94 75 75 75 755</p>
              <p className="text-sm">Sainthamaruthu, Srilanka</p>
            </div>
            <WorldMap />

            {/* <div>
              <p className="text-sm font-light">Email</p>
             
              <p className="text-sm font-light">Phone</p>
              
              <p className="text-sm font-light">Address</p>
              
            </div> */}
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            className="p-10 md:w-1/2 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <LabelInputContainer>
                <Label htmlFor="firstname">Name</Label>
                <Input
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  id="firstname"
                  placeholder=""
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="email">Email</Label>
                <Input
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  placeholder=""
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  value={formData.subject}
                  onChange={handleChange}
                  name="subject"
                  id="subject"
                  placeholder=""
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="message">Message</Label>
                <Input
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  id="message"
                  placeholder=""
                  type="text"
                />
              </LabelInputContainer>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "Submitting .. Please wait " : "Submit"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
