"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react"; 

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
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // 🔑 Parolni ko‘rsatish

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
        const { name, phone, password } = formData;
        let valid = true;
        const newErrors = { name: "", phone: "", password: "" };

        if (!/^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]+$/.test(name)) {
            newErrors.name = "Ism bosh harfi katta bo‘lishi  kerak!";
            valid = false;
        }

        if (!/^\+998\d{9}$/.test(phone)) {
            newErrors.phone = "Telefon +998XXXXXXXXX formatida bo‘lishi kerak!";
            valid = false;
        }

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(password)) {
            newErrors.password = "Parol kamida 5 ta belgidan iborat  bo‘lishi shart!";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        try {
            const { data } = await axios.post<User>(
                "https://fdb4bf8077154ed1.mokky.dev/signin",
                formData
            );

            if (data) {
                localStorage.setItem("user", JSON.stringify(data));
                window.dispatchEvent(new Event("userChanged"));
                router.push("/");
            } else {
                setErrors((prev) => ({ ...prev, phone: "Login ma'lumotlari noto‘g‘ri!" }));
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error("Login error:", err.message);
            }
            setErrors((prev) => ({ ...prev, phone: "Server bilan ulanishda xatolik!" }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:w-[400px] w-[300px] mx-auto">
            <div className="border-pink-400 md:border p-5 rounded-md shadow-xl">
                <h1 className="text-2xl font-medium mb-4 text-center font-mono">🌸Kirish</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Ism */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="🌸 Ism"
                            value={formData.name}
                            onChange={handleChange}
                            className={`border p-3 font-mono rounded-md w-full ${
                                errors.name ? "border-red-500" : "border-pink-400"
                            }`}
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Telefon */}
                    <div>
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
                                setErrors((prev) => ({ ...prev, phone: "" }));
                            }}
                            className={`border p-3 font-mono rounded-md w-full ${
                                errors.phone ? "border-red-500" : "border-pink-400"
                            }`}
                            required
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Parol */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="🌸 Parol"
                                value={formData.password}
                                onChange={handleChange}
                                className={`border p-3 font-mono rounded-md w-full ${
                                    errors.password ? "border-red-500" : "border-pink-400"
                                }`}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

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
