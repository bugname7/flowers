"use client";

import Image from "next/image";
import { useLike } from "../context/LikeContext";

const flowers = [
    { id: 1, name: "Rosa", slug: "rosa", image: "/images/kelinGul.jpg" },
    { id: 2, name: "Lily", slug: "lily", image: "/images/znak.jpg" },
    { id: 3, name: "Tulip", slug: "tulip", image: "/images/sakura.jpg" },
    { id: 4, name: "3b1", slug: "3b1", image: "/images/3b1.jpg" },
    { id: 5, name: "Arxideya", slug: "arxideya", image: "/images/arxideya.jpg" },
];

export default function CatalogPage() {
    const { likes, toggleLike } = useLike();

    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold mb-4">📖 Katalog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {flowers.map((flower) => {
                    const isLiked = likes.some((item) => item.id === flower.id);

                    return (
                        <div
                            key={flower.id}
                            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition relative"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={flower.image}
                                    alt={flower.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-2 text-center font-mono font-medium text-pink-700">
                                {flower.name}
                            </div>

                            <button
                                onClick={() => toggleLike(flower)}
                                className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition-all duration-200 ${isLiked
                                        ? "bg-pink-600 hover:bg-pink-700"
                                        : "bg-white hover:bg-gray-200"
                                    }`}
                            >
                                <Image
                                    src="/images/like.svg"
                                    alt="like"
                                    width={22}
                                    height={22}
                                    className={`transition-all duration-200 ${isLiked ? "invert brightness-0" : "opacity-50"
                                        }`}
                                />
                            </button>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
