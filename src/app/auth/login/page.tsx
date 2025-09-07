import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kirish — Florist Diyora",
  description: "Florist Diyora akkauntingizga kiring",
};

export default function LoginPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">Kirish</h1>
      <p>Login formasi shu yerda bo‘ladi.</p>
    </main>
  );
}
