import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sharhlar — Florist Diyora",
  description: "Mijozlarimiz fikrlari",
};

export default function ReviewsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Sharhlar</h1>
      <p>Mijozlarimiz fikrlari shu yerda bo‘ladi.</p>
    </main>
  );
}
