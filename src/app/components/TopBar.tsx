"use client";

import Link from "next/link";
import Image from "next/image";
import { useLike } from "../context/LikeContext";

export default function Topbar() {
  const { likes } = useLike();

  return (
    <div className="w-full bg-gray-900 text-gray-200 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 py-2 gap-2 md:gap-0">
        {/* Chap tomondagi text */}
        <div className="flex gap-2 md:gap-6 text-left items-center">
          <span className="font-mono font-semibold">
            Shahar: <b>Farg&apos;ona, Quva tumani</b>
          </span>
        </div>

        {/* O'ng tomondagi linklar */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-left items-center">
          <Link
            href="/likes"
            className="hover:text-pink-400 font-mono font-semibold cursor-pointer flex gap-2 items-center relative"
          >
            {/* Like icon + Badge */}
            <div className="relative">
              <Image
                src="/images/like.svg"
                alt="likes image"
                width={22}
                height={22}
                className="object-contain"
              />
              {likes.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                  {likes.length}
                </span>
              )}
            </div>
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

          <Link
            href="/profile"
            className="bg-white text-black px-3 py-1 rounded-xl font-mono font-semibold flex items-center justify-center gap-2 min-w-[110px] z-10 pointer-events-auto"
          >
            <Image
              src="/images/user.svg"
              alt="profile icon"
              width={20}
              height={20}
              className="object-contain"
            />
            Profil
          </Link>
        </div>
      </div>
    </div>
  );
}
