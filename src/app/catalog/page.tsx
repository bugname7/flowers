"use client";

import Link from "next/link";
import Image from "next/image";
import { useLike } from "../context/LikeContext";
import { flowers, Flower } from "@/data/Flower";

export default function CatalogPage() {
    const { likes, toggleLike } = useLike();

    return (
        <main className="p-6">
            <h1 className="text-2xl font-semibold font-mono text-center mb-4">
                🌸 Katalog
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {flowers.map((flower: Flower) => {
                    const isLiked = likes.some((item) => item.id === flower.id);

                    return (
                        <div data-aos="zoom-in"
                            key={flower.id}
                            className="border border-pink-500 rounded-lg overflow-hidden shadow-md 
             hover:shadow-lg hover:scale-105 
             transition-transform duration-300 ease-in-out relative"
                        >
                            <Link href={`/flowers/${flower.slug}`}>
                                <div className="relative w-full h-48">
                                    <Image
                                        src={flower.image}
                                        alt={flower.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-2 text-center font-mono font-semibold text-pink-700">
                                    {flower.name}
                                </div>

                            </Link>

                            {/* Like tugmasi burchakda */}
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
                                    className={`transition-all duration-200 ${isLiked
                                        ? "invert brightness-0"
                                        : "opacity-50"
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
