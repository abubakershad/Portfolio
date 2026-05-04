"use client";

import { useState } from "react";
import ContactButton from "@/components/Button";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaShareAlt,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const phoneRegex = /^[0-9+]*$/;
      if (!phoneRegex.test(value)) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("❌ Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pb-16">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <p className="text-gray-400 text-lg">CONTACT</p>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-2">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
        </motion.div>

        <div className="mb-6">
          <p className="text-gray-400 mt-2 text-lg max-w-2xl tracking-wide">
            Have a project in mind or just want to say hello? Fill out the form
            or reach out through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 order-1 lg:order-1 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">
                Send a Message
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                Fill out the form below and I will get back to you within 24
                hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full mb-4 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address<span className="text-red-500"> *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full mb-4 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  title="Please enter a valid email address"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Phone Number<span className="text-red-500"> *</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1(555)000-0000"
                  className="w-full mb-4 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Subject<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Discussion (e.g., Website, Bug Fix, App Design)"
                  className="w-full mb-4 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Project Description<span className="text-red-500"> *</span>
              </label>
              <textarea
                name="message"
                placeholder="Type your message here"
                rows={5}
                className="w-full mb-4 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <ContactButton loading={loading} />
          </motion.form>

          <div className="lg:col-span-1 order-2 lg:order-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start p-6 rounded-xl bg-white/5 border border-white/10
              backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <FaEnvelope className="text-xl text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <p className="text-gray-400 text-sm mb-1">Drop me a line</p>
                <Link
                  href="mailto:abubakershad.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300"
                >
                  abubakershad.dev@gmail.com
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10
              backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
            >
              <div className="flex gap-4 items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <FaShareAlt className="text-xl text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Socials</h4>
                  <p className="text-gray-400 text-sm">Connect with me</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://github.com/abubakershad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:bg-cyan-400 hover:text-black hover:-translate-y-1 transition"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/abu-baker-shad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:bg-cyan-400 hover:text-black hover:-translate-y-1 transition"
                >
                  <FaLinkedin />
                </Link>

                <Link
                  href="https://wa.me/923214033991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:bg-cyan-400 hover:text-black hover:-translate-y-1 transition"
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex gap-4 items-start hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
            >
              <div className="w-12 h-12 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center">
                <FaMapMarkerAlt className="text-xl text-green-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">Location</h4>
                <p className="text-gray-400 text-sm">Remote Worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
