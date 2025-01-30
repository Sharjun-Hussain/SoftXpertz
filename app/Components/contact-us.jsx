import { LampContainer } from "@/components/ui/lamp";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { WorldMap } from "@/components/ui/world-map";
import { PinPerspective } from "@/components/ui/3d-pin";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import contact from "../assets/images/contact.png";
import logo from "@/public/logo.png";

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
    <div
      className={` items-center  bg-black md:px-8 pb-7 md:mb-7`}
      id="contact"
    >
      <div className="text-center bg-black p-6 overflow-hidden lg:mt-7"></div>
      <div className=" md:flex md:justify-center md:items-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left Side: Details */}

          <motion.div
            className=" text-white md:px-10 pb-5 pt-2 md:w-1/2 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src={logo}
              alt="image"
              height={25}
              className="flex lg:hidden"
            />
            <div className="lg:text-5xl text-2xl font-extrabold mb-3">
              Contact Us
            </div>
            <p className=" text-lg">
              We are always looking for ways to improve our products and
              services. Contact us and let us know how we can help you.
            </p>
            <div className="flex md:flex-row gap-4 space-y-2 md:space-y-0 flex-col mt-4 md:justify-between">
              <div className="space-y-3">
                <p className="text-sm  mb-2 flex items-center gap-2 text-zinc-300">
                  <Mail size={14} /> info@softxpertz.lk
                </p>

                <p className="text-lg flex  font-bold items-center gap-2 text-[#435B6E]">
                  <MapPin size={18} /> Head Office:{" "}
                </p>
                <span className="text-sm ms-7">65/14, Liyanage Road,</span>
                <br />
                <span className="text-sm ms-7">Dehiwala,</span>
                <br />
                <span className="text-sm ms-7">Sri Lanka</span>
              </div>
              <div className="space-y-3">
                <p className="text-sm flex items-center gap-2 text-zinc-300">
                  {" "}
                  <Phone size={14} /> +94 75 75 75 755
                </p>

                <p className="text-lg flex  font-bold items-center gap-2 text-[#435B6E]">
                  <MapPin size={18} /> Back Office:{" "}
                </p>
                <span className="text-sm ms-7">316/A, AlHilal Road,</span>
                <br />
                <span className="text-sm ms-7">Sainthamaruthu-15,</span>
                <br />
                <span className="text-sm ms-7">Sri Lanka</span>
              </div>
            </div>
            <div className="mt-12"></div>
            <div className="flex justify-center">
              {/* <Image src={contact} width={250} alt="SoftXpertz" /> */}
            </div>
            {/* <WorldMap /> */}
            <Image
              src={logo}
              alt="image"
              height={50}
              className="hidden lg:flex"
            />
          </motion.div>

          <motion.div
            className=" bg-gradient-to-br from-zinc-900 to-slate-900 p-5 rounded-lg md:p-10 md:w-1/2 w-full flex flex-col h-fit "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className=" lg:flex gap-4">
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
              </div>
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
