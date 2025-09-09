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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

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

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("userChanged"));
    setIsOpen(false);
  };

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-pink-100 shadow-md mb-8">
      <div className="container mx-auto px-4 flex justify-between items-center h-[70px] relative">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={handleLinkClick}>
          <Image
            src="/images/logo-image.png"
            alt="Florist Diyora logo"
            width={160}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-pink-900 font-semibold items-center">
          <li><Link href="/" className="font-mono font-semibold text-pink-700">🌸Bosh sahifa</Link></li>
          <li><Link href="/catalog" className="font-mono font-semibold text-pink-700">🌸Gullar</Link></li>
          <li><Link href="/about" className="font-mono font-semibold text-pink-700">🌸Biz haqimizda</Link></li>
          <li><Link href="/contact" className="font-mono font-semibold text-pink-700">🌸Kontaktlar</Link></li>
          <li><Link href="/news" className="font-mono font-semibold text-pink-700">🌸Yangiliklar</Link></li>
        </ul>

        <div className="flex gap-4 mr-10  md:mr-0 items-center absolute right-12 md:static">
          <Link href="/cart">
            <Image src="/images/cart.svg" alt="cart icon" width={25} height={25} />
          </Link>
          <Link href="/likes">
            <Image src="/images/like1.svg" alt="like1 icon" width={25} height={25} />
          </Link>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="font-semibold font-mono  text-sm shadow-xl bg-black text-white py-2 px-2 rounded-2xl">
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
            <Link href="/auth/login" className="text-sm text-white bg-black hover:bg-gray-200 hover:text-black px-2 py-1 rounded-xl font-semibold font-mono">
              Kirish
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-pink-900 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden mt-4 px-6 pb-4 flex flex-col gap-3 text-pink-900 font-semibold bg-pink-50 shadow-inner">
          {[
            { href: "/", label: "🌸Bosh sahifa" },
            { href: "/catalog", label: "🌸Gullar" },
            { href: "/about", label: "🌸Biz haqimizda" },
            { href: "/contact", label: "🌸Kontaktlar" },
            { href: "/news", label: "🌸Yangiliklar" },


          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono font-medium text-pink-700 block"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            {user ? (
              <div className="flex flex-col gap-1">
                <span className="font-mono font-semibold bg-black text-white  text-center py-2 px-1 rounded-xl w-[120px]">
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-black flex bg-white shadow-md mt-4 font-mono font-semibold text-center py-2 px-1 rounded-xl w-[100px]"
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
                className="font-mono font-medium text-white bg-black py-1 px-3 rounded-xl  block text-center"
                onClick={handleLinkClick}
              >
                Kirish
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
