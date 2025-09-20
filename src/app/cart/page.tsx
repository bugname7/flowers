"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "../components/ScrollToTop";
import Map from "../components/Map";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Flower {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
  slug: string;
}

interface User {
  name: string;
  phone: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<Flower[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);

    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    setUser(storedUser);
  }, []);

  const handleRemove = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartChanged"));

    toast.info("Mahsulot savatdan o'chirildi 🗑️", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const sendToTelegram = async (item: Flower) => {
    if (!user) {
      toast.warning("Avval tizimga kiring 🌸", {
        position: "top-right",
        autoClose: 2500,
      });
      return;
    }

    const message = `👤 Foydalanuvchi: ${user.name}
📞 Telefon: ${user.phone}
🌸 ${item.name}
💰 Narxi: ${item.price.toLocaleString()} so'm
📄 Tavsif: ${item.desc}`;

    try {
      const res = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        toast.success("Buyurtma Telegram ga yuborildi! Admin siz bilan bog'lanadi 🌸", {
          position: "top-right",
          autoClose: 2500,
        });
      } else {
        toast.error(data.error || "Telegramga yuborishda xato 😢", {
          position: "top-right",
          autoClose: 2500,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Telegramga yuborishda xato 😢", { position: "top-right", autoClose: 2500 });
    }
  };

  return (
    <div className="container w-full mx-auto">
      <ToastContainer />
      <main className="p-6 min-h-screen bg-pink-50">
        <Link
          href={"/catalog"}
          className="text-pink-400 font-mono font-semibold cursor-pointer bg-black py-2 px-3 rounded-xl"
        >
          Orqaga
        </Link>

        <h1 className="text-3xl font-mono font-bold text-pink-700 mt-8 mb-6">🛒 Savat</h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-600 text-lg">Savat bo'sh 🌸</p>
            <Link
              href="/catalog"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              🌸 Katalogga qaytish
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-4 bg-white rounded-2xl shadow-lg p-4"
              >
                <div className="relative w-full md:w-1/4 h-48 rounded-lg overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="text-3xl font-mono font-bold text-pink-700">{item.name}</h2>
                  <p className="text-gray-600 font-mono font-medium">{item.desc}</p>
                  <p className="text-lg font-bold text-pink-600 font-mono">
                    💰 {item.price.toLocaleString()} so‘m
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-mono font-semibold transition w-full md:w-auto"
                  >
                    🗑️ O'chirish
                  </button>
                  <button
                    onClick={() => sendToTelegram(item)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-mono font-semibold transition w-full md:w-auto"
                  >
                    🌸 Buyurtma berish
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <div className="px-4">
        <Map />
      </div>
      <ScrollToTop />
    </div>
  );
}
