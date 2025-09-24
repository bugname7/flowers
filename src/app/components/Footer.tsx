import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-center py-6 mt-12 overflow-hidden">

      {/* Logo */}
      <div className="mb-4 flex justify-center" data-aos="zoom-out">
        <Link href={"/"}>
          <Image
            src="/images/logo-image.png"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      {/* Telegram kanali va admin lichkasi */}
      <div className="flex flex-col gap-4 items-center mt-6 text-white text-lg md:text-xl">

        <a
          href="https://t.me/florist_diyora"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-pink-500 transition font-mono font-medium"
        >
          <Image
            src="/images/telegram.svg"
            alt="Telegram Kanal"
            width={30}
            height={30}
            className="bg-white rounded-full p-1"
          />
          Telegram
        </a>

        {/* Comment sahifasi linki */}
        <Link
          href="/comments"
          className="flex items-center gap-2 hover:text-pink-500 transition font-mono font-medium"
        >
          <Image
            src="/images/comments.svg" // agar icon bo‘lsa, yo‘q bo‘lsa olib tashlashingiz mumkin
            alt="Sayt haqida fikrlar"
            width={30}
            height={30}
            className="bg-white rounded-full p-1"
          />
          Sayt haqida fikrlar
        </Link>

      </div>

      {/* Copyright */}
      <p className="text-xs md:text-sm text-pink-500 font-mono font-bold mt-6">
        © {new Date().getFullYear()} Florist Diyora. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
}
