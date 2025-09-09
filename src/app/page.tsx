import type { Metadata } from "next";
import Image from "next/image";
import Map from "./components/Map";

export const metadata: Metadata = {
  title: "Florist Diyora — Bosh sahifa",
  description: "Gullar va nafislik olami",
};

export default function HomePage() {
  return (
    <div className="container mx-auto w-full px-4">
      <div className="mx-auto container ">
        <div className="relative w-full max-w-[550px] h-[250px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/images/3b1.jpg"
            alt="kelin gul"
            fill
            className="object-cover"
            priority
          />
          <h1 className="absolute bottom-4 left-4 text-black font-bold font-mono text-sm md:text-lg lg:text-2xl">
            Uylaringizni <span className="text-pink-500 font-mono">chiroyli</span> qiladigan gullar 🌸 — har kuni <span className="text-pink-500 font-mono">yangi</span> kayfiyat!
          </h1>
        </div>
      </div>
      <Map />
    </div>
  );
}
