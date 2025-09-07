import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florist Diyora — Bosh sahifa",
  description: "Gullar va nafislik olami — Florist Diyora bosh sahifasi",
};

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Florist Diyora</h1>
      <p className="mt-2">Gullar va nafislik olami — xush kelibsiz!</p>
    </main>
  );
}
