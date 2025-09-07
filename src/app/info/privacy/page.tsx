import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maxfiylik siyosati — Florist Diyora",
  description: "Florist Diyora foydalanuvchi ma’lumotlarini qanday saqlaydi",
};

export default function PrivacyPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Maxfiylik siyosati</h1>
      <p>Foydalanuvchi ma’lumotlari maxfiy saqlanadi.</p>
    </main>
  );
}
