import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Gul ma'lumotlari
const flowers = [
    { id: 1, name: "Rosa", slug: "rosa", image: "/images/kelinGul.jpg", description: "Rosa gullari nafosat va go‘zallik ramzi." },
    { id: 2, name: "Lily", slug: "lily", image: "/images/znak.jpg", description: "Lily gullari sof va pokiza tuyg‘ularni bildiradi." },
    { id: 3, name: "Tulip", slug: "tulip", image: "/images/sakura.jpg", description: "Tulip gullari bahor va yangi boshlanish ramzi." },
    { id: 4, name: "3b1", slug: "3b1", image: "/images/3b1.jpg", description: 'Juda ham go‘zal gul' },
    { id: 5, name: "Arxideya", slug: "arxideya", image: "/images/arxideya.jpg", description: 'O‘ziga jozibali' },
];

// Page props tipi
interface PageProps {
    params: {
        slug: string;
    };
}

// Metadata generatsiyasi
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const flower = flowers.find(f => f.slug === params.slug);
    if (!flower) {
        return { title: "Gul topilmadi", description: "Bunday gul mavjud emas" };
    }
    return { title: `${flower.name} — Florist Diyora`, description: flower.description };
}

// Slug asosida page
export default function FlowerPage({ params }: PageProps) {
    const flower = flowers.find(f => f.slug === params.slug);

    if (!flower) {
        notFound(); // 404 sahifaga yo‘naltiradi
    }

    return (
        <main className="p-6 max-w-lg mx-auto">
            {/* Orqaga tugma */}
            <Link
                href="/catalog"
                className="inline-block mb-4 text-pink-500 font-mono hover:underline"
            >
                ← Orqaga
            </Link>

            <h1 className="text-2xl font-bold mb-4 font-mono text-pink-700">{flower.name}</h1>

            <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
                <Image
                    src={flower.image}
                    alt={flower.name}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <p className="font-mono text-gray-700">{flower.description}</p>
        </main>
    );
}
