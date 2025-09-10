import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Map from "./components/Map";
import ScrollToTop from "./components/ScrollToTop";

export const metadata: Metadata = {
  title: "Florist Diyora — Bosh sahifa",
  description: "Gullar va nafislik olami",
};

export default function HomePage() {
  return (
    <div className="container mx-auto w-full px-8 overflow-x-hidden">
      {/* Hero section */}
      <div className="mx-auto mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Asosiy gul banner */}
          <div
            className="relative w-full md:w-1/2 h-[200px] md:h-[400px] lg:h-[500px] mx-auto"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Image
              src="/images/3b1.jpg"
              alt="kelin gul"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <h1 className="absolute md:bottom-[390px] left-6 top-4 md:left-10 text-black font-bold font-mono text-sm md:text-lg lg:text-2xl drop-shadow-md">
              Uylaringizni <span className="text-pink-500">chiroyli</span> qiladigan gullar 🌸 —
              har kuni <span className="text-pink-500">yangi</span> kayfiyat!
            </h1>
          </div>

          {/* Yonidagi qo‘shimcha gullar */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
            <div className="relative w-full h-40 md:h-60">
              <Image
                src="/images/arxideya1.jpg"
                alt="arxideya1 gul"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative w-full h-40 md:h-60">
              <Image
                src="/images/znak.jpg"
                alt="znak gul"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative w-full h-40 md:h-60 col-span-2">
              <Image
                src="/images/palmals.jpg"
                alt="arxideya gul"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>



      {/* CTA */}
      <div className="text-center my-8">
        <h2 className="text-xl md:text-2xl font-bold font-mono mb-4" data-aos="fade-up">
          🌸 Eng so‘nggi gullarimizni kashf qiling!
        </h2>
        <Link data-aos="zoom-out" href="/catalog" className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 font-mono transition">
          Katalogga o‘tish
        </Link>
      </div>

      {/* Features / Afzalliklar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-center">
        <div className="p-4 border-2 border-pink-400 rounded-lg shadow hover:shadow-lg transition" data-aos="fade-up-right">
          <Image
            src="/images/pochta.png"
            alt="Tez yetkazib berish"
            width={300}
            height={100}
            className="object-contain w-full h-[150px]"
          />
          <h3 className="font-mono font-semibold mt-2">🌸Tez yetkazib berish</h3>
          <p className="text-sm mt-1 font-mono  ">Buyurtmangizni yetkazib berish hizmatini ham yaqin kunlarda yo'lga qo'yamiz</p>
        </div>

        <div className="p-4 border-2 border-pink-400 rounded-lg shadow hover:shadow-lg transition" data-aos="fade-up-left">
          <Image
            src="/images/flowers.jpg"
            alt="Yangi gullar"
            width={300}
            height={200}
            className="object-contain w-full h-[150px]"
          />
          <h3 className="font-mono font-semibold mt-2">🌸Yangi gullar</h3>
          <p className="text-sm mt-1 font-mono">Har kuni yangi gullar bilan ta’minlaymiz.</p>
        </div>

        <div className="p-4 border-2 border-pink-400 rounded-lg shadow hover:shadow-lg transition" data-aos="fade-up-right" >
          <Image
            src="/images/my.jpg"
            alt="Shaxsiy dizayn"
            width={300}
            height={200}
            className="object-contain w-full h-[150px]"
          />
          <h3 className="font-mono font-semibold mt-2">🌸Shaxsiy dizayn</h3>
          <p className="text-sm mt-1 font-mono">Sizning xohishingiz bo‘yicha gul bezaklari.</p>
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
        <h2 className="text-xl md:text-2xl font-bold font-mono mb-4 text-center" data-aos="zoom-out-up">🌸 So‘nggi yangiliklar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded overflow-hidden shadow-lg" data-aos="fade-right">
            <Image src="/images/lola.jpg" alt="Yangilik 1" width={400} height={200} className="object-cover w-full h-[200px]" />
            <div className="p-4" >
              <h3 className="font-mono font-semibold">🌸Bahor kolleksiyasi</h3>
              <p className="text-sm font-mono font-medium mt-1">Yangi bahor gullari bilan uylaringizni bezating.</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg" data-aos="fade-left">
            <Image src="/images/kelinGul.jpg" alt="Yangilik 2" width={500} height={200} className="object-cover w-full h-[200px]" />
            <div className="p-4">
              <h3 className="font-mono font-semibold">🌸Kelinlik gullari</h3>
              <p className="text-sm font-mono font-medium mt-1">To‘y marosimida kelin kiyimi bilan uyg‘un keladigan gullardir</p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg" data-aos="fade-right">
            <Image src="/images/ramadan.jpg" alt="Yangilik 2" width={400} height={200} className="object-cover w-full h-[200px]" />
            <div className="p-4">
              <h3 className="font-mono font-semibold">🌸Bayram gullari</h3>
              <p className="text-sm font-mono font-medium mt-1">Bayram kunlarini bezash va quvonchni ifodalash uchun ishlatiladigan gullardir</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog / Maslahatlar */}
      <div className="my-8">
        <h2 className="text-xl md:text-2xl font-bold font-mono mb-4 text-center" data-aos="zoom-out">🌸 Sun’iy gullar va dekoratsiya bo‘yicha maslahatlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-pink-500 rounded shadow hover:shadow-lg transition" data-aos="zoom-in-right">
            <Image src="/images/arxideya2.jpg" alt="arxidya 2image" width={400} height={200} className="object-cover w-full h-[250px]" />
            <h3 className="font-mono font-semibold mt-2">🌸Sun’iy gullarni uzoq vaqt yangi saqlash</h3>
            <ul className="text-sm font-mono mt-1 list-disc list-inside">
              <li>Gullarni changdan toza tutish uchun yumshoq mato bilan artib turing.</li>
              <li>Nam joyda saqlashdan saqlaning, bu rangning o‘zgarishiga olib kelishi mumkin.</li>
              <li>Har yili yengil sovunli suv bilan yuvib, quritib qo‘ying.</li>
            </ul>
          </div>

          <div className="p-4 border border-pink-500 rounded shadow hover:shadow-lg transition" data-aos="zoom-in-left">
            <Image src="/images/siren-pink.jpg" alt="siren pink" width={400} height={200} className="object-cover rounded-md w-full h-[250px]" />
            <h3 className="font-mono font-semibold mt-2">🌸Uy bezaklarida sun’iy gullar kombinatsiyasi</h3>
            <ul className="text-sm font-mono mt-1 list-disc list-inside">
              <li>Ranglar uyg‘unligini hisobga oling.</li>
              <li>Turli balandlikdagi gullarni aralashtiring.</li>
              <li>Kerak bo‘lsa, dekorativ idish va aksessuarlar bilan bezang.</li>
            </ul>
          </div>

          <div className="p-4 border border-pink-500    rounded shadow hover:shadow-lg transition" data-aos="zoom-in-right">
            <Image src="/images/married.jpg" alt="married image" width={400} height={200} className="object-cover w-full h-[250px]" />
            <h3 className="font-mono font-semibold mt-2"> 🌸Bayram va to‘y dekoratsiyasida sun’iy gullar</h3>
            <ul className="text-sm font-mono mt-1 list-disc list-inside">
              <li>Rang-barang gullar bilan bayram kayfiyatini oshiring.</li>
              <li>Kelinlik gullarini mavsumiy ranglar bilan uyg‘unlashtiring.</li>
              <li>Sun’iy gullar bilan shaxsiy dizayn yaratish mumkin.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ / Tez-tez so‘raladigan savollar */}
      <div className="my-8">
        <h2 className="text-xl md:text-2xl font-bold font-mono mb-4 text-center" data-aos="zoom-in">❓ Tez-tez so‘raladigan savollar</h2>
        <div className="space-y-4">

          <div className="p-4 border border-pink-400 rounded shadow" data-aos="fade-up-right">
            <h3 className="font-mono font-semibold">🌸 Gullarning yangi ekanligiga kafolat bormi?</h3>
            <p className="text-sm font-mono mt-1">Ha, barcha gullarimiz har kuni yangilanadi va sifatga kafolat beriladi.</p>
          </div>
          <div className="p-4 border border-pink-400 rounded shadow" data-aos="fade-up-left">
            <h3 className="font-mono font-semibold ">🌸 Maxsus dizayn buyurtma qilish mumkinmi?</h3>
            <p className="text-sm font-mono mt-1">Albatta, sizning xohishingizga mos keladigan shaxsiy dizaynlar tayyorlaymiz.</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <ScrollToTop />
      <Map />
    </div>
  );
}
