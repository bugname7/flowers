import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biz haqimizda — Florist Diyora",
  description: "Florist Diyora haqida qisqacha ma’lumot",
};

export default function AboutPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Biz haqimizda</h1>
      <p>Florist Diyora — gul yetkazib berishda yetakchi kompaniya.</p>
    </main>
  );
}
