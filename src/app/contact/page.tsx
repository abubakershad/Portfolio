"use client";

import { useState } from "react";
import ContactButton from "@/components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Only allow digits and +
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

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
    <section id="contact" className="py-20 px-6 bg-gray-800 text-white">
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
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-4xl font-bold text-blue-600 mb-10">Let’s Connect</div>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Full Name<span className="text-red-500"> *</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Phone Number<span className="text-red-500"> *</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1(555)000-0000"
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Project Description<span className="text-red-500"> *</span>
            </label>
            <textarea
              name="message"
              placeholder="Type your message here"
              rows={5}
              className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <ContactButton loading={loading} />
        </form>
      </div>
    </section>
  );
}
