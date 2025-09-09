"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Map from "../components/Map";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://fdb4bf8077154ed1.mokky.dev/contact-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Xabaringiz muvaffaqiyatli yuborildi!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
      }
    } catch (error) {
      console.error(error); // ixtiyoriy
      toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-2">
      <main className="max-w-3xl mx-auto p-6">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
        <h1 className="text-3xl font-bold mb-6 text-center font-mono">🌸 Kontaktlar</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="🌸 Ismingiz"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 font-mono rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="🌸 Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 font-mono rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <textarea
            name="message"
            placeholder="🌸 Xabaringiz"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border font-mono border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white py-3 cursor-pointer rounded-md hover:bg-pink-600 transition-colors font-mono"
            disabled={loading}
          >
            {loading ? "🌸 Yuborilmoqda..." : "🌸 Yuborish"}
          </button>
        </form>
      </main>
      <Map />
    </div>
  );
}
