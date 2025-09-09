import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Map from "./components/Map";
export const metadata: Metadata = {
  title: "Florist Diyora — Bosh sahifa",
  description: "Gullar va nafislik olami",
};

export default function HomePage() {
  return (
    <div className="container mx-auto w-full px-4">
      {/* Hero section */}
      <div className="mx-auto container mb-8">
        <div className="relative w-full max-w-[550px] h-[250px] md:h-[400px] lg:h-[500px] mx-auto">
          <Image
            src="/images/3b1.jpg"
            alt="kelin gul"
            fill
            className="object-cover rounded-lg"
            priority
          />
          <h1 className="absolute bottom-4 left-4 text-black font-bold font-mono text-sm md:text-lg lg:text-2xl">
            Uylaringizni <span className="text-pink-500 font-mono">chiroyli</span> qiladigan gullar 🌸 — har kuni <span className="text-pink-500 font-mono">yangi</span> kayfiyat!
          </h1>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center my-8">
        <h2 className="text-xl md:text-2xl font-bold font-mono mb-4">
          🌸 Eng so‘nggi gullarimizni kashf qiling!
        </h2>
        <Link href="/catalog" className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 font-mono transition">
          Katalogga o‘tish
        </Link>
      </div>

      {/* Features / Afzalliklar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
          <Image src="/images/fast-delivery.svg" alt="Tez yetkazib berish" width={60} height={60} />
          <h3 className="font-mono font-semibold mt-2">Tez yetkazib berish</h3>
          <p className="text-sm mt-1">Buyurtmangizni tezda yetkazib beramiz.</p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
          <Image src="/images/fresh-flowers.svg" alt="Yangi gullar" width={60} height={60} />
          <h3 className="font-mono font-semibold mt-2">Yangi gullar</h3>
          <p className="text-sm mt-1">Har kuni yangi gullar bilan ta’minlaymiz.</p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
          <Image src="/images/custom-design.svg" alt="Shaxsiy dizayn" width={60} height={60} />
          <h3 className="font-mono font-semibold mt-2">Shaxsiy dizayn</h3>
          <p className="text-sm mt-1">Sizning xohishingiz bo‘yicha gul bezaklari.</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="my-8">
        <h2 className="text-xl md:text-2xl font-bold font-mono mb-4 text-center">🌸 Mijozlarimiz nima deydi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded shadow">
            <p className="font-mono">"Florist Diyora xizmatidan juda mamnunman, gullar har doim yangi va go‘zal!"</p>
            <span className="font-bold mt-2 block">— Malika</span>
          </div>
          <div className="p-4 border rounded shadow">
            <p className="font-mono">"Tez yetkazib berish va shaxsiy dizayn juda yoqdi."</p>
            <span className="font-bold mt-2 block">— Sardor</span>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="my-8">
        <h2 className="text-xl md:text-2xl font-bold font-mono mb-4 text-center">🌸 So‘nggi yangiliklar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded overflow-hidden shadow-lg">
            <Image src="/images/news1.jpg" alt="Yangilik 1" width={400} height={200} className="object-cover w-full h-[150px]" />
            <div className="p-4">
              <h3 className="font-mono font-semibold">Bahor kolleksiyasi</h3>
              <p className="text-sm mt-1">Yangi bahor gullari bilan uylaringizni bezating.</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <Image src="/images/news2.jpg" alt="Yangilik 2" width={400} height={200} className="object-cover w-full h-[150px]" />
            <div className="p-4">
              <h3 className="font-mono font-semibold">Bayram aksiyasi</h3>
              <p className="text-sm mt-1">Har bir buyurtma uchun sovg‘a!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <Map />
    </div>
  );
}
