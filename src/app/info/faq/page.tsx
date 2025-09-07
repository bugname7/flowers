import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Florist Diyora",
  description: "Tez-tez beriladigan savollar va javoblar",
};

export default function FaqPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">FAQ</h1>
      <p>Tez-tez beriladigan savollar shu yerda bo‘ladi.</p>
    </main>
  );
}
