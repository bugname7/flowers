"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-100 shadow-md h-[100px] flex items-center mb-8">
      <div className="container mx-auto px-20 flex justify-between items-center">
       
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-image.png"
            alt="Florist Diyora logo"
            width={220}
            height={50}
            priority
          />
        </Link>

        <ul className="hidden md:flex gap-6 text-pink-900 font-medium">
          <li><Link href="/">Bosh sahifa</Link></li>
          <li><Link href="/catalog">Katalog</Link></li>
          <li><Link href="/cart">Savat</Link></li>
          <li><Link href="/about">Biz haqimizda</Link></li>
          <li><Link href="/contact">Kontaktlar</Link></li>
          <li><Link href="/news">Yangiliklar</Link></li>
          <li><Link href="/reviews">Sharhlar</Link></li>
          <li><Link href="/info/faq">FAQ</Link></li>
        </ul>

        <div className="hidden md:flex gap-4">
          <Link href="/auth/login" className="text-sm text-pink-900 hover:underline">
            Kirish
          </Link>
          <Link
            href="/auth/register"
            className="text-sm bg-pink-600 text-white px-3 py-1 rounded-lg hover:bg-pink-700 transition"
          >
            Ro‘yxatdan o‘tish
          </Link>
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
        <ul className="md:hidden mt-4 px-6 pb-4 flex flex-col gap-3 text-pink-900 font-medium bg-pink-50 shadow-inner">
          <li><Link href="/">Bosh sahifa</Link></li>
          <li><Link href="/catalog">Katalog</Link></li>
          <li><Link href="/cart">Savat</Link></li>
          <li><Link href="/about">Biz haqimizda</Link></li>
          <li><Link href="/contact">Kontaktlar</Link></li>
          <li><Link href="/news">Yangiliklar</Link></li>
          <li><Link href="/reviews">Sharhlar</Link></li>
          <li><Link href="/info/faq">FAQ</Link></li>
          <li><Link href="/auth/login">Kirish</Link></li>
          <li><Link href="/auth/register">Ro‘yxatdan o‘tish</Link></li>
        </ul>
      )}
    </nav>
  );
}
