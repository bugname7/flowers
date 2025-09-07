import Link from "next/link";

export default function Topbar() {
  return (
    <div className="w-full bg-gray-900 text-gray-200 text-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">

        <div className="flex gap-6">
          <span>Shahar: <b>Farg'ona, Quva</b></span>
        </div>

        <div className="flex gap-6">
          <Link href="/likes" className="hover:text-pink-400">
            ❤️ Zakladkalar
          </Link>
          <Link href="/delivery" className="hover:text-pink-400">
            🚚 Yetkazib berish
          </Link>
          <Link href="/contacts" className="hover:text-pink-400">
            📞 Kontaktlar
          </Link>
          <Link href="/login" className="hover:text-pink-400">
            👤 Kirish | Ro‘yxatdan o‘tish
          </Link>
        </div>
      </div>
    </div>
  );
}
