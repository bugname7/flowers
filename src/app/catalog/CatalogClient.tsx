"use client";

import Link from "next/link";
import Image from "next/image";
import { useLike } from "../context/LikeContext";
import { flowers, Flower } from "@/data/Flower";

export default function CatalogClient() {
    const { likes, toggleLike } = useLike();

    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Katalog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {flowers.map((flower: Flower) => {
                    const isLiked = likes.some((item) => item.id === flower.id);

                    return (
                        <div
                            key={flower.id}
                            className="border rounded-lg shadow-md hover:shadow-lg transition p-2"
                        >
                            <Link href={`/flowers/${flower.slug}`}>
                                <div className="relative w-full h-48">
                                    <Image
                                        src={flower.image}
                                        alt={flower.name}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            </Link>

                            <div className="p-2 text-center font-mono font-medium text-pink-700">
                                {flower.name}
                            </div>
                            <div className="p-2 text-center text-gray-600">
                                ${flower.price}
                            </div>

                            <button
                                onClick={() => toggleLike(flower)}
                                className={`w-full px-4 py-2 rounded-md font-mono font-medium transition ${isLiked
                                    ? "bg-red-500 text-white"
                                    : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                            >
                                {isLiked ? "❤️ Unlike" : "🤍 Like"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
