import type { Metadata } from "next";
import Flowers from "../components/Flowers";
import Map from '../components/Map'
import ScrollToTop from "../components/ScrollToTop";
export const metadata: Metadata = {
  title: "Biz haqimizda — Florist Diyora",
  description: "Florist Diyora haqida qisqacha ma’lumot",
};

export default function AboutPage() {

  return (
    <div className="container px-6 md:px-2 mx-auto">
      <h2 className="font-mono text-3xl font-bold text-center mb-8" data-aos="fade-up">
        🌸  Gullar onlayn do'koni
      </h2>

      <div className="pt-20 text-center  items-center">
        <Flowers />
        <Map />
        <ScrollToTop data-aos="zoom-in-up"/>

      </div>

    </div>
  );
}
