"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
    id: number;
    name: string;
}

interface Comment {
    id: number;
    userName: string;
    message: string;
}

export default function CommentPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [message, setMessage] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [editId, setEditId] = useState<number | null>(null);

    const COMMENTS_URL = "https://fdb4bf8077154ed1.mokky.dev/comments";

    // Client-side tekshirish
    useEffect(() => {
        setMounted(true);
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Login bo‘lmagan foydalanuvchi redirect
    useEffect(() => {
        if (mounted && !user) {
            router.replace("/auth/login");
        }
    }, [mounted, user, router]);

    // Serverdan commentlarni olish
    useEffect(() => {
        if (!mounted) return;
        fetch(COMMENTS_URL)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(err => console.error(err));
    }, [mounted]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message || !user) return;

        try {
            let newComment: Comment;

            if (editId !== null) {
                // Edit comment
                newComment = { id: editId, userName: user.name, message };
                await fetch(`${COMMENTS_URL}/${editId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newComment),
                });
                setComments(prev => prev.map(c => (c.id === editId ? newComment : c)));
                setEditId(null);
            } else {
                // New comment
                newComment = { id: Date.now(), userName: user.name, message };
                await fetch(COMMENTS_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newComment),
                });
                setComments(prev => [...prev, newComment]);
            }

            setMessage("");
        } catch (err) {
            console.error(err);
        }
    };

    const handleEdit = (id: number, msg: string) => {
        setEditId(id);
        setMessage(msg);
    };

    const handleDelete = async (id: number) => {
        try {
            await fetch(`${COMMENTS_URL}/${id}`, { method: "DELETE" });
            setComments(prev => prev.filter(c => c.id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    if (!mounted) return null;

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6 text-center">💬 Sayt haqida fikrlar</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
                <textarea
                    placeholder="🌸 Izohingiz"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                    required
                />
                <button
                    type="submit"
                    className="bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition-colors"
                >
                    {editId !== null ? "Tahrirlash" : "Izoh qoldirish"}
                </button>
            </form>

            <div className="flex flex-col gap-4">
                {comments.map(c => (
                    <div key={c.id} className="p-3 border border-gray-300 rounded-md flex justify-between items-center">
                        <div>
                            <span className="font-bold text-pink-500">{c.userName}</span>: {c.message}
                        </div>
                        {user && c.userName === user.name && (
                            <div className="flex gap-2">
                                <button
                                    className="text-blue-500 hover:underline"
                                    onClick={() => handleEdit(c.id, c.message)}
                                >
                                    Tahrirlash
                                </button>
                                <button
                                    className="text-red-500 hover:underline"
                                    onClick={() => handleDelete(c.id)}
                                >
                                    O'chirish
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
