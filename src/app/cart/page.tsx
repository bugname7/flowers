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

export default function CartPage() {
  const [cart, setCart] = useState<Flower[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
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
    const token = "8425703443:AAGZMADPZJoTQzupxI8voxHzHhCd_uqpv6o";
    const chatId = '6424874069'; // O'zingning chat ID
    const message = `🌸 ${item.name}\n💰 Narxi: ${item.price.toLocaleString()} so'm\n📄 Tavsif: ${item.desc}`;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      toast.success("Buyurtma Telegram ga yuborildi! admin siz bilan boglanadi🌸", {
        position: "top-right",
        autoClose: 2500,
      });
    } catch (_) {
      toast.error("Telegramga yuborishda xato 😢", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="container w-full mx-auto">
      <ToastContainer />
      <main className="p-6 min-h-screen bg-pink-50">
        <Link href={"/catalog"} className="text-pink-600 hover:underline">
          Orqaga
        </Link>
        <h1 className="text-3xl font-bold text-pink-700 mb-6">🛒 Savat</h1>

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
                <div className="flex gap-2">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 font-mono py-2 rounded-lg font-semibold transition"
                  >
                    🗑️ O'chirish
                  </button>
                  <button
                    onClick={() => sendToTelegram(item)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 font-mono py-2 rounded-lg font-semibold transition"
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
