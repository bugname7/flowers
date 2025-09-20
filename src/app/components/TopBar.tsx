"use client";

import Link from "next/link";
import Image from "next/image";
import { useLike } from "../context/LikeContext";

export default function Topbar() {
  const { likes } = useLike();

  return (
    <>
      {/* Fixed topbar */}
      <div className="fixed top-0 left-0 w-full bg-gray-900 text-gray-200 text-sm z-[60] shadow-md backdrop-blur-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 py-2 gap-4 md:gap-0">
          <div className="flex gap-2 md:gap-6 items-center">
            <span className="font-mono font-semibold text-center">
              Shahar: <b>Farg&apos;ona, Quva tumani</b>
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full md:w-auto">
            <div className="flex flex-row gap-28 md:gap-6 lg:gap-6 order-1 md:order-none">
              <Link
                href="/likes"
                className="hover:text-pink-400 font-mono font-semibold cursor-pointer flex gap-2 items-center relative"
              >
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
                className="hover:text-pink-400 font-mono font-bold cursor-pointer flex gap-2 items-center"
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

            <Link
              href="/profile"
              className="bg-white text-black px-3 py-1 rounded-xl font-mono font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 w-full md:w-auto z-10 pointer-events-auto order-2 md:order-none"
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

      {/* Sahifa kontenti uchun topbar balandligi bilan joy tashlash */}
      <div className="mt-[32px] md:mt-[40px]"></div>
    </>
  );
}
