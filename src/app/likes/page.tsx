"use client";

import Image from "next/image";
import Link from "next/link";
import { useLike } from "../context/LikeContext";

export default function LikesPage() {
    const { likes, toggleLike } = useLike();

    if (likes.length === 0) {
        return (
            <main className="p-6 text-center font-mono">
                <h1 className="text-2xl font-bold font-mono mb-4" data-aos="zoom-in-up">💖 Sevimlilar</h1>
                <p data-aos="zoom-in" className="font-mono font-medium">Hozircha hech qanday gulga like bosilmagan 🌸</p>
            </main>
        );
    }

    return (
        <main className="p-6" >
            <h1 className="text-2xl font-mono font-bold mb-6 text-center" data-aos="zoom-in-up">💖 Sevimli gullaringiz</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" data-aos="zoom-in">
                {likes.map((flower) => (
                    <div
                        key={flower.id}
                        className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition relative"
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
                            <div className="p-2 text-center font-mono font-medium text-pink-700">
                                {flower.name}
                            </div>
                        </Link>

                        <button
                            onClick={() => toggleLike(flower)}
                            className="absolute top-2 right-2 p-2 rounded-full shadow-md bg-pink-600 hover:bg-pink-700 transition"
                        >
                            <Image
                                src="/images/like.svg"
                                alt="unlike"
                                width={22}
                                height={22}
                                className="invert brightness-0"
                            />
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}
