import type { Metadata } from "next";
import Flowers from "../components/Flowers";
import Map from '../components/Map'
import ScrollToTop from "../components/ScrollToTop";
export const metadata: Metadata = {
  title: "Biz haqimizda ",
  description: "Florist Diyora haqida qisqacha ma’lumot",
};

export default function AboutPage() {

  return (
    <div className="container px-6 md:px-2 mx-auto">
      <h2 className="font-mono md:text-3xl lg:text-2xl text-xl font-bold text-center mb-0 md:mb-8 lg:mb-6" data-aos="fade-up">
        🌸Flowers-Diyora onlayn gullar  do'koni
      </h2>

      <div className="pt-20 text-center  items-center">
        <Flowers />
        <Map />
        <ScrollToTop data-aos="zoom-in-up" />

      </div>

    </div>
  );
}
