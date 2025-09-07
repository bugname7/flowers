import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ro‘yxatdan o‘tish — Florist Diyora",
  description: "Florist Diyora’da yangi akkaunt oching",
};

export default function RegisterPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">Ro‘yxatdan o‘tish</h1>
      <p>Registratsiya formasi shu yerda bo‘ladi.</p>
    </main>
  );
}
