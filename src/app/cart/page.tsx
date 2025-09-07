import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savat — Florist Diyora",
  description: "Tanlangan mahsulotlaringiz savatda",
};

export default function CartPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Savat</h1>
      <p>Bu yerda foydalanuvchi tanlagan mahsulotlar chiqadi.</p>
    </main>
  );
}
