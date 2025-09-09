"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Map from "../components/Map";

interface User {
  id: number;
  name: string;
  phone: string;
  password: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setFormData({
          name: parsedUser.name || "",
          phone: parsedUser.phone || "",
          password: parsedUser.password || "",
        });
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!user) return;

    setLoading(true);
    try {
      // API ga PATCH request
      const { data } = await axios.patch<User>(
        `https://fdb4bf8077154ed1.mokky.dev/signin/${user.id}`,
        formData
      );

      // localStorage yangilash
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);

      // Navbar va boshqa komponentlar uchun event
      window.dispatchEvent(new Event("userChanged"));

      toast.success("✅ Profil ma’lumotlari yangilandi!");
    } catch (error) {
      console.error("Profilni yangilashda xatolik:", error);
      toast.error("❌ Profilni yangilashda xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="container w-full mx-auto p-5">
        <main className="p-6 text-center">
          <h1 className="text-xl font-semibold mb-4 font-mono">🌸Mening profilim</h1>
          <p className="text-red-600 mb-4 font-mono">⚠️ Siz login qilmagansiz!</p>
          <Link
            href="/auth/login"
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 font-mono"
          >
            🌸Login sahifasiga o'tish
          </Link>
        </main>
        <Map />
      </div>
    );
  }

  return (
    <div className="container w-full mx-auto px-4">
      <main className="p-6 max-w-md mx-auto">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
        <h1 className="text-xl font-semibold mb-4" data-aos="zoom-in-up">🌸Mening profilim</h1>

        <div className="flex flex-col gap-4">
          <input data-aos="zoom-in-up"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="🌸Ism"
            className="border p-3 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none font-mono"
          />
          <input data-aos="zoom-in-up"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="🌸Telefon raqam"
            className="border p-3 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none font-mono"
          />
          <div className="relative">
            <input data-aos="zoom-in-up"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="🌸Parol"
              className="border p-3 rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none font-mono w-full"
            />
            <button data-aos="zoom-in-up"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 hover:text-gray-900 font-mono"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <button data-aos="zoom-in-up"
            onClick={handleSave}
            disabled={loading}
            className="bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 font-mono"
          >
            {loading ? "🌸Yangilanmoqda..." : "🌸Saqlash"}
          </button>
        </div>
      </main>
      <Map />
    </div>
  );
}
