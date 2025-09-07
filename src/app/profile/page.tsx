import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mening profilim — Florist Diyora",
  description: "Foydalanuvchi akkaunt ma’lumotlari",
};

export default function ProfilePage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">Mening profilim</h1>
      <p>Foydalanuvchi ma’lumotlari shu yerda bo‘ladi.</p>
    </main>
  );
}
