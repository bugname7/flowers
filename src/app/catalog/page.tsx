import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Katalog — Florist Diyora",
    description: "Florist Diyora katalogi: Roses, Gifts va boshqa mahsulotlar",
};

export default function CatalogPage() {
    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold">Katalog</h1>
            <p>Bu yerda barcha mahsulotlar ro‘yxati chiqadi.</p>
        </main>
    );
}
