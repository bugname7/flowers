import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="w-full bg-gray-900 text-gray-200 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 py-2 gap-2 md:gap-0">
        {/* Chap tomondagi text */}
        <div className="flex gap-2 md:gap-6 text-left">
          <span className="font-mono">
            Shahar: <b>Farg&apos;ona, Quva tumani</b>
          </span>
        </div>

        {/* O'ng tomondagi linklar */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-left">
          <Link
            href="/likes"
            className="hover:text-pink-400 font-mono cursor-pointer flex gap-2 items-center"
          >
            <Image
              src="/images/like.svg"
              alt="likes image"
              width={20}
              height={20}
              className="object-contain"
            />
            Sevimlilar
          </Link>

          <Link
            href="/contact"
            className="hover:text-pink-400 font-mono cursor-pointer flex gap-2 items-center"
          >
            <Image
              src="/images/contact.svg"
              alt="contact icon"
              width={20}
              height={20}
              className="object-contain"
            />
            Kontaktlar
          </Link>
        </div>
      </div>
    </div>
  );
}
