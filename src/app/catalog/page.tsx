import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Katalog — Florist Diyora",
    description: "Florist Diyora katalogi: Roses, Gifts va boshqa mahsulotlar",
};

// Mock data
const flowers = [
    { id: 1, name: "Rosa", slug: "rosa", image: "/images/kelinGul.jpg" },
    { id: 2, name: "Lily", slug: "lily", image: "/images/znak.jpg" },
    { id: 3, name: "Tulip", slug: "tulip", image: "/images/sakura.jpg" },
    { id: 4, name: "3b1", slug: "3b1", image: "/images/3b1.jpg" },
    { id: 5, name: "arxideya", slug: "arxideya", image: "/images/arxideya.jpg" },
];

export default function CatalogPage() {
    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Katalog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {flowers.map((flower) => (
                    <Link
                        key={flower.id}
                        href={`/flowers/${flower.slug}`}
                        className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                    >
                        <div className="relative w-full h-48">
                            <Image
                                src={flower.image}
                                alt={flower.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="p-2 text-center font-mono font-medium text-pink-700">
                            {flower.name}
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
