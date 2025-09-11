"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { flowers, Flower } from "@/data/Flower";

export default function FlowerDetailPage() {
    const params = useParams();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug; 
    const router = useRouter();

    const flower = flowers.find((f) => f.slug === slug);

    if (!flower) return <p className="p-6 font-mono font-medium">Gul topilmadi 🌸</p>;

    const handleAddToCart = () => {
        const user = localStorage.getItem("user");
        if (!user) {
            toast.error("Savatga qo‘shish uchun avvalo tizimga kiring ❌", {
                position: "bottom-center",
                autoClose: 2500,
            });
            setTimeout(() => router.push("/auth/login"), 1500);
            return;
        }

        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (!cart.find((item: Flower) => item.id === flower.id)) cart.push(flower);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartChanged"));

        toast.success(`${flower.name} savatga qo‘shildi! 🌸`, {
            position: "bottom-center",
            autoClose: 2000,
        });
    };

    return (
        <main className="p-6 flex justify-center bg-gradient-to-br min-h-screen" data-aos="zoom-in">
            <ToastContainer />
            <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-4">
                    <button
                        onClick={() => router.push("/catalog")}
                        className="flex items-center gap-2 text-pink-600 hover:text-pink-800 font-mono font-semibold transition"
                    >
                        🌸 Orqaga
                    </button>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-8">
                    <div className="relative w-full md:w-1/2 h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                        <Image src={flower.image} alt={flower.name} fill className="object-cover" />
                    </div>

                    <div className="md:w-1/2 flex flex-col justify-between h-full">
                        <div>
                            <h1 className="text-4xl font-bold text-pink-700 mb-4 font-mono">{flower.name}</h1>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg font-mono">{flower.desc}</p>
                            <p className="text-2xl font-semibold text-pink-600 mb-8 font-mono">
                                💰 {flower.price.toLocaleString()} so‘m
                            </p>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="bg-pink-600 hover:bg-pink-700 cursor-pointer text-white md:px-8 md:py-4 px-6 py-2 rounded-xl font-mono shadow-md transition-all duration-200 text-lg"
                        >
                            🛒 Savatga qo‘shish
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
