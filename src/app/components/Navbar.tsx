"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  phone: string;
  password: string;
}

interface Flower {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
  slug: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<Flower[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));

      const handleUserChange = () => {
        const updatedUser = localStorage.getItem("user");
        setUser(updatedUser ? JSON.parse(updatedUser) : null);
      };
      window.addEventListener("userChanged", handleUserChange);

      return () => window.removeEventListener("userChanged", handleUserChange);
    }
  }, []);

  const updateCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  };

  useEffect(() => {
    updateCart();
    window.addEventListener("cartChanged", updateCart);
    return () => window.removeEventListener("cartChanged", updateCart);
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      setUser(null);
      setCart([]);
      window.dispatchEvent(new Event("userChanged"));
      window.dispatchEvent(new Event("cartChanged"));
      setIsOpen(false);
    }
  };

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* Fixed navbar */}
      <nav className="fixed mb-30 top-29 md:top-11   left-0 w-full z-50  from-pink-200 to-pink-700 shadow-xl backdrop-blur-md">
        <div className="container mx-auto px-4 flex justify-between items-center h-[80px] relative ">
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <Image
              src="/images/logo-image.png"
              alt="Florist Diyora logo"
              width={160}
              height={60}
              className="object-cover"
              priority
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6  font-semibold items-center">
            <li>
              <Link href="/" className="font-mono font-semibold hover:text-pink-500 transition">
                🌸 Bosh sahifa
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="font-mono font-semibold hover:text-pink-500 transition">
                🌸 Gullar
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-mono font-semibold hover:text-pink-500 transition">
                🌸 Biz haqimizda
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-mono font-semibold hover:text-pink-500 transition">
                🌸 Kontaktlar
              </Link>
            </li>
          </ul>

          {/* Desktop: Cart + User */}
          <div className="hidden md:flex gap-4 items-center">
            <Link href="/cart" className="relative">
              <Image src="/images/cart.svg" alt="cart icon" width={28} height={28} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {cart.length}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-3">
                <span className="font-semibold font-mono text-sm shadow-xl bg-black text-white py-2 px-3 rounded-2xl">
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm text-black bg-white flex py-1 cursor-pointer px-3 rounded-xl shadow-lg font-mono items-center gap-1 hover:bg-gray-200 transition"
                >
                  <Image src="/images/exit.svg" alt="exit" width={20} height={20} />
                  Chiqish
                </button>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="text-sm text-white bg-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-xl font-semibold font-mono transition"
              >
                Kirish
              </Link>
            )}
          </div>

          {/* Mobile: Cart + Toggle */}
          <div className="flex items-center md:hidden gap-6">
            <Link href="/cart" className="relative">
              <Image src="/images/cart.svg" alt="cart icon" width={28} height={28} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                  {cart.length}
                </span>
              )}
            </Link>
            <button className="text-black text-3xl" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden  shadow-xl px-4 py-4 flex flex-col gap-4 animate-slideDown">
            <Link href="/" className="font-mono font-semibold text-black" onClick={handleLinkClick}>
              🌸 Bosh sahifa
            </Link>
            <Link href="/catalog" className="font-mono font-semibold text-black" onClick={handleLinkClick}>
              🌸 Gullar
            </Link>
            <Link href="/about" className="font-mono font-semibold text-black" onClick={handleLinkClick}>
              🌸 Biz haqimizda
            </Link>
            <Link href="/contact" className="font-mono font-semibold text-black" onClick={handleLinkClick}>
              🌸 Kontaktlar
            </Link>

            {user ? (
              <div className="flex flex-col gap-2 mt-2">
                <span className="font-semibold font-mono text-sm shadow-xl bg-black text-white py-2 px-4 rounded-2xl text-center">
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-sm text-black bg-white flex justify-center py-2 cursor-pointer rounded-xl shadow-lg font-mono items-center gap-1 hover:bg-gray-200 transition"
                >
                  <Image src="/images/exit.svg" alt="exit" width={20} height={20} />
                  Chiqish
                </button>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="text-sm text-center text-white bg-black hover:bg-gray-200 hover:text-black px-3 py-2 rounded-xl font-semibold font-mono transition"
              >
                Kirish
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Sahifa kontenti uchun navbar balandligi bilan joy tashlash */}
      <div className="mt-[210px] md:mt-[152px]"></div>
    </>
  );
}
