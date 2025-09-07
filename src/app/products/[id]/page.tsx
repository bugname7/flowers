"use client";

import { useCart } from "@/app/context/CartContext";
import { useLike } from "@/app/context/LikeContext";

type ProductPageProps = {
  params: { id: string };
};

const products = [
  { id: 1, name: "Qizil Gullar", price: 50000, desc: "Romantik sovg‘a uchun ideal." },
  { id: 2, name: "Oq Liliya", price: 70000, desc: "Nafosat va sof tuyg‘ular ramzi." },
  { id: 3, name: "Tulpan", price: 45000, desc: "Bahoriy kayfiyat bag‘ishlaydi." },
];

export default function ProductPage({ params }: ProductPageProps) {
  const { addToCart } = useCart();
  const { toggleLike, likes } = useLike();

  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Mahsulot topilmadi ❌</h1>
      </main>
    );
  }

  const isLiked = likes.some((item) => item.id === product.id);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.desc}</p>
      <p className="text-lg font-semibold mb-6">
        {product.price.toLocaleString()} so'm
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => addToCart(product)}
          className="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          🛒 Savatga qo‘shish
        </button>
        <button
          onClick={() => toggleLike(product)}
          className={`px-5 py-2 rounded transition ${isLiked ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
        >
          {isLiked ? "❤️ Sevimlidan olib tashlash" : "🤍 Sevimlilarga qo‘shish"}
        </button>
      </div>
    </main>
  );
}
