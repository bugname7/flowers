"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

interface User {
    id: number;
    name: string;
    phone: string;
    password: string;
}

export default function LoginForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await axios.post<User>(
                "https://fdb4bf8077154ed1.mokky.dev/signin",
                formData
            );

            if (data) {
                // 🔥 foydalanuvchini localStorage'ga saqlaymiz
                localStorage.setItem("user", JSON.stringify(data));

                // 🔥 Navbar darrov yangilanishi uchun event yuboramiz
                window.dispatchEvent(new Event("userChanged"));

                toast.success("✅ Muvaffaqiyatli kirdingiz!");
                setTimeout(() => router.push("/"), 1000);
            } else {
                toast.error("❌ Login ma'lumotlari noto‘g‘ri!");
            }
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error("Server xatolik:", err.response?.data || err.message);
                toast.error("❌ " + (err.response?.data?.message || "Login xato!"));
            } else {
                console.error("Noma’lum xatolik:", err);
                toast.error("⚠️ Server bilan ulanishda xatolik!");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:w-[400px] w-[300px] mx-auto">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                draggable
                pauseOnHover
            />
            <div className="border-pink-400 md:border p-5 rounded-md shadow-xl">
                <h1 className="text-2xl font-medium mb-4 text-center font-mono">
                    🌸Kirish
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="🌸 Ism"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-3 font-mono focus:ring-2 focus:ring-pink-500 focus:outline-none border-gray-300 rounded-md"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="🌸 Telefon raqam"
                        value={
                            formData.phone.startsWith("+998")
                                ? formData.phone
                                : "+998" + formData.phone.replace(/\D/g, "")
                        }
                        onChange={(e) => {
                            let val = e.target.value;
                            if (!val.startsWith("+998")) {
                                val = "+998" + val.replace(/\D/g, "");
                            }
                            setFormData((prev) => ({ ...prev, phone: val }));
                        }}
                        className="border p-3 font-mono focus:ring-2 focus:ring-pink-500 focus:outline-none border-gray-300 rounded-md"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="🌸 Parol"
                        value={formData.password}
                        onChange={handleChange}
                        className="border p-3 font-mono focus:ring-2 focus:ring-pink-500 focus:outline-none border-gray-300 rounded-md"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition cursor-pointer"
                    >
                        {loading ? "🌸Kirish..." : "🌸Kirish"}
                    </button>
                </form>
            </div>
        </div>
    );
}
