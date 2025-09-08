import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Florist Diyora — Bosh sahifa",
  description: "Gullar va nafislik olami",
};

export default function HomePage() {
  return (
    <div className="mx-auto container">
      <div className="relative w-[550px]">
        <img
          src="/images/3b1.jpg"
          alt="kelin gul"
          className="w-full"
        />
        <h1 className="absolute bottom-4 left-4 text-black text-left font-bold font-mono text-2xl  pb-[300px] pl-[100px] ">
          Uylaringizni <span className="text-pink-500 font-mono">chiroyli</span>  qiladigan gullar  🌸 — har kuni <span className="text-pink-500 font-mono">yangi</span> kayfiyat!

        </h1>
      </div>
      <div>
        
      </div>
    </div>
  );
}
