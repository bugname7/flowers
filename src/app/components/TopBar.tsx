import Link from "next/link";

export default function Topbar() {
  return (
    <div className="w-full bg-gray-900 text-gray-200 text-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">

        {/* Chap tomondagi text */}
        <div className="flex gap-6">
          <span className="font-mono">
            Shahar: <b>Farg'ona, Quva tumani</b>
          </span>
        </div>

        {/* O'ng tomondagi linklar */}
        <div className="flex gap-6">
          <Link
            href="/likes"
            className="hover:text-pink-400 font-mono cursor-pointer flex gap-2
            "
          >
            <img src="/images/like.svg" alt="likes image " className="w-[20px]" /> Sevimlilar
          </Link>

          <Link
            href="/contact"
            className="hover:text-pink-400 font-mono cursor-pointer flex items-center gap-2"
          >
            <img src="/images/contact.svg" alt="contact icon " /> Kontaktlar
          </Link>

          <Link
            href="/login"
            className="hover:text-pink-400 font-mono cursor-pointer"
          >
            Kirish | Ro‘yxatdan o‘tish
          </Link>
        </div>
      </div>
    </div>
  );
}
