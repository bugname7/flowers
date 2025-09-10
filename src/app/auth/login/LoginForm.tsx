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

    const validateForm = () => {
        const { name, phone, password } = formData;

        // Ism: bosh harfi katta va faqat harflar
        if (!/^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]+$/.test(name)) {
            toast.error("Ism bosh harfi katta bo‘lishi va faqat harflardan iborat bo‘lishi kerak!");
            return false;
        }

        // Telefon: +998XXXXXXXXX formatida bo‘lishi kerak
        if (!/^\+998\d{9}$/.test(phone)) {
            toast.error("Telefon +998XXXXXXXXX formatida bo‘lishi kerak!");
            return false;
        }

        // Parol: minimal 6 ta belgi, raqam va harf bo‘lishi tavsiya qilinadi
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            toast.error("Parol kamida 6 ta belgidan iborat bo‘lishi va raqam ham harf bo‘lishi kerak!");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validatsiyani tekshirish
        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            const { data } = await axios.post<User>(
                "https://fdb4bf8077154ed1.mokky.dev/signin",
                formData
            );

            if (data) {
                localStorage.setItem("user", JSON.stringify(data));
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
                <h1 className="text-2xl font-medium mb-4 text-center font-mono">🌸Kirish</h1>
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
                        value={formData.phone}
                        onChange={(e) => {
                            let val = e.target.value.replace(/\D/g, "");
                            if (!val.startsWith("998")) val = "998" + val;
                            if (val.length > 12) val = val.slice(0, 12);
                            setFormData((prev) => ({ ...prev, phone: "+" + val }));
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
