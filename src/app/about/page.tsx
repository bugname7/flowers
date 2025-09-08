import type { Metadata } from "next";
import Flowers from "../components/Flowers";

export const metadata: Metadata = {
  title: "Biz haqimizda — Florist Diyora",
  description: "Florist Diyora haqida qisqacha ma’lumot",
};

export default function AboutPage() {
  return (
    <div className="container px-6 md:px-2 mx-auto">
      <h2 className="font-mono text-3xl font-bold text-center mb-8">
      🌸  Gullar onlayn do'koni
      </h2>

      <div className="flex justify-center gap-6 mb-10">
        <Flowers />

      </div>

    </div>
  );
}
