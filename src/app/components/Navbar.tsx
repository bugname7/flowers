"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-pink-100 shadow-md mb-8">
      <div className="container mx-auto px-4 flex justify-between items-center h-[70px]">

        {/* Logo */}
        <Link href="/" className="flex items-center">
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
        <ul className="hidden md:flex gap-6 text-pink-900 font-medium items-center">
          <li><Link href="/" className="font-mono font-medium  text-pink-700">Bosh sahifa</Link></li>
          <li><Link href="/catalog" className="font-mono font-medium  text-pink-700">Gullar</Link></li>
          <li><Link href="/about" className="font-mono font-medium  text-pink-700">Biz haqimizda</Link></li>
          <li><Link href="/contact" className="font-mono font-medium  text-pink-700">Kontaktlar</Link></li>
          <li><Link href="/news" className="font-mono font-medium  text-pink-700">Yangiliklar</Link></li>

        </ul>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex gap-4">
          <Link href="/cart">
            <Image src="/images/like.svg" alt="like icon" width={25} height={25} />
          </Link>
          <Link href="/auth/login" className="text-sm text-pink-900 hover:underline">
            Kirish
          </Link>
          <Link
            href="/auth/register"
            className=" bg-pink-600 font-mono text-white px-3 py-1 rounded-lg hover:bg-pink-700 transition"
          >
            Royxatdan otish
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-pink-900 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
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
