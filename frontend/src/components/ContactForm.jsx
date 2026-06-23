"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/enquiry",
        formData,
      );

      toast.success(`Ticket: ${res.data.enquiry.ticketId}`);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    } catch {
      toast.error("Error");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-200 rounded-3xl p-8 md:p-10 space-y-5 max-w-xl mx-auto"
    >
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>

        <p className="text-gray-500 mt-2">
          We'd love to hear from you. Send us your enquiry.
        </p>
      </div>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <select
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="">Select Subject</option>
        <option value="Job Inquiry">Job Inquiry</option>
        <option value="Project Discussion">Project Discussion</option>
        <option value="Internship">Internship</option>
      </select>

      <textarea
        rows="5"
        name="message"
        placeholder="Write your message..."
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
      />

      <button
        disabled={loading}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
