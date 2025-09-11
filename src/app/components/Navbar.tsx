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

  // Userni o'qish
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));

      const handleUserChange = () => {
        const updatedUser = localStorage.getItem("user");
        setUser(updatedUser ? JSON.parse(updatedUser) : null);
      };
      window.addEventListener("userChanged", handleUserChange);

      return () => {
        window.removeEventListener("userChanged", handleUserChange);
      };
    }
  }, []);

  // Cartni o'qish va yangilash
  const updateCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  };

  useEffect(() => {
    updateCart(); // Initial load
    window.addEventListener("cartChanged", updateCart);
    return () => window.removeEventListener("cartChanged", updateCart);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userChanged"));
    setIsOpen(false);
  };

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-pink-100 shadow-md mb-8 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center h-[80px] relative">
        {/* Logo */}
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
        <ul className="hidden md:flex gap-6 text-pink-900 font-semibold items-center">
          <li>
            <Link href="/" className="font-mono font-semibold text-pink-700">
              🌸Bosh sahifa
            </Link>
          </li>
          <li>
            <Link href="/catalog" className="font-mono font-semibold text-pink-700">
              🌸Gullar
            </Link>
          </li>
          <li>
            <Link href="/about" className="font-mono font-semibold text-pink-700">
              🌸Biz haqimizda
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-mono font-semibold text-pink-700">
              🌸Kontaktlar
            </Link>
          </li>
          <li>
            <Link href="/news" className="font-mono font-semibold text-pink-700">
              🌸Yangiliklar
            </Link>
          </li>
        </ul>

        {/* Desktop: Cart + User */}
        <div className="hidden md:flex gap-4 items-center">
          {/* Cart */}
          <Link href="/cart" className="relative">
            <Image src="/images/cart.svg" alt="cart icon" width={25} height={25} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Desktop User */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="font-semibold font-mono text-sm shadow-xl bg-black text-white py-2 px-2 rounded-2xl">
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm text-black bg-white flex py-1 cursor-pointer px-2 rounded-xl shadow-xl font-mono"
              >
                <Image
                  src="/images/exit.svg"
                  alt="exit image"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Chiqish
              </button>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="text-sm text-white bg-black hover:bg-gray-200 hover:text-black px-2 py-1 rounded-xl font-semibold font-mono"
            >
              Kirish
            </Link>
          )}
        </div>

        {/* Mobile: Cart + Toggle */}
        <div className="flex items-center md:hidden gap-8">
          <Link href="/cart" className="relative">
            <Image src="/images/cart.svg" alt="cart icon" width={25} height={25} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          <button
            className="text-pink-900 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu (username + logout tugmasi menu ichida) */}
      {isOpen && (
        <div className="md:hidden bg-pink-50 shadow-md px-4 pb-4 flex flex-col gap-4">
          <Link href="/" className="font-mono font-semibold text-pink-700" onClick={handleLinkClick}>
            🌸Bosh sahifa
          </Link>
          <Link href="/catalog" className="font-mono font-semibold text-pink-700" onClick={handleLinkClick}>
            🌸Gullar
          </Link>
          <Link href="/about" className="font-mono font-semibold text-pink-700" onClick={handleLinkClick}>
            🌸Biz haqimizda
          </Link>
          <Link href="/contact" className="font-mono font-semibold text-pink-700" onClick={handleLinkClick}>
            🌸Kontaktlar
          </Link>
          <Link href="/news" className="font-mono font-semibold text-pink-700" onClick={handleLinkClick}>
            🌸Yangiliklar
          </Link>

          {/* Mobile User */}
          {user ? (
            <div className="flex items-center gap-3 mt-2">
              <span className="font-semibold font-mono text-sm shadow-xl bg-black text-white py-2 px-8 rounded-2xl">
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm text-black bg-white flex py-1 cursor-pointer px-2 rounded-xl shadow-xl font-mono"
              >
                <Image
                  src="/images/exit.svg"
                  alt="exit image"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Chiqish
              </button>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="text-sm text-center text-white bg-black hover:bg-gray-200 hover:text-black px-2 py-1 rounded-xl font-semibold font-mono"
            >
              Kirish
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
