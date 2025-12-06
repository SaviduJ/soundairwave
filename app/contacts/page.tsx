"use client";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-gradient-to-b from-green-50 to-blue-50 p-8 rounded-xl shadow-md flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-semibold text-green-700">Get in Touch</h2>
          <p className="text-gray-600">We’d love to hear from you! Reach out using the form or via the details below.</p>
          <p className="text-gray-700">📍 638/1 Govinna Mawatha Athurugiriya,Sri Lanka</p>
          <p className="text-gray-700">📞 +94 77 123 4567</p>
          <p className="text-gray-700">📧 info@soundairwater.com</p>
        </div>

        {/* Inquiry Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-8 space-y-6"
          >
            {submitted && (
              <p className="text-green-600 font-semibold text-center">
                ✅ Thank you! Your inquiry has been submitted.
              </p>
            )}

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
