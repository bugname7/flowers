import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontaktlar — Florist Diyora",
  description: "Florist Diyora bilan bog‘lanish uchun ma’lumotlar",
};

export default function ContactPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Kontaktlar</h1>
      <p>Telefon: +998 90 123 45 67</p>
      <p>Email: info@floristdiyora.uz</p>
    </main>
  );
}
