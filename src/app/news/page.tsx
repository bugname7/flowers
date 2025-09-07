import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yangiliklar — Florist Diyora",
  description: "Florist Diyora yangiliklari va e’lonlari",
};

export default function NewsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Yangiliklar</h1>
      <p>So‘nggi yangiliklar shu yerda chiqadi.</p>
    </main>
  );
}
