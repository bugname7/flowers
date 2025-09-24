"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ScrollToTop from "../components/ScrollToTop";

interface User {
    id: number;
    name: string;
}

interface Comment {
    id: number;
    userName: string;
    message: string;
    timestamp: string;
}

export default function CommentPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [message, setMessage] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [editId, setEditId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false); // 🔑 tugma bosilganda kutish rejimi

    const COMMENTS_URL = "https://fdb4bf8077154ed1.mokky.dev/comments";

    useEffect(() => {
        setMounted(true);
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    useEffect(() => {
        if (mounted && !user) router.replace("/auth/login");
    }, [mounted, user, router]);

    useEffect(() => {
        if (!mounted) return;
        fetch(COMMENTS_URL)
            .then(res => res.json())
            .then((data: Comment[]) => {
                const commentsWithTime = data.map(c => ({
                    ...c,
                    timestamp: c.timestamp || new Date().toISOString(),
                }));
                setComments(commentsWithTime);
            })
            .catch(err => console.error(err));
    }, [mounted]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message || !user) return;

        setLoading(true); // 🔑 tugma bosilganda bloklash
        try {
            let newComment: Comment;

            if (editId !== null) {
                newComment = { id: editId, userName: user.name, message, timestamp: new Date().toISOString() };
                await fetch(`${COMMENTS_URL}/${editId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newComment),
                });
                setComments(prev => prev.map(c => (c.id === editId ? newComment : c)));
                setEditId(null);
            } else {
                newComment = { id: Date.now(), userName: user.name, message, timestamp: new Date().toISOString() };
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
        } finally {
            setLoading(false); // 🔑 tugma yana faollashadi
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

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    return (
        <div>
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold font-mono mb-8 text-center text-pink-500">Gullar haqida fikrlar</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
                    <textarea
                        placeholder="🌸 Izohingizni yozing..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm resize-none transition-all duration-200"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading} 
                        className={`py-3 rounded-xl font-mono font-semibold shadow-md transition-all duration-200 ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-pink-500 hover:bg-pink-600 text-white cursor-pointer"
                            }`}
                    >
                        {loading ? "⏳ Kuting..." : editId !== null ? "Tahrirlash" : "Izoh qoldirish"}
                    </button>
                </form>

                <div className="flex flex-col gap-4">
                    {comments.map(c => (
                        <div
                            key={c.id}
                            className="p-4 border border-gray-200 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow-sm transition-transform hover:scale-[1.01]"
                        >
                            <div className="mb-2 md:mb-0">
                                <span className="font-bold font-mono text-pink-500">{c.userName}</span>: {c.message}
                                <div className="text-gray-400 text-xs mt-1">{formatDate(c.timestamp)}</div>
                            </div>
                            {user && c.userName === user.name && (
                                <div className="flex gap-3 mt-2 md:mt-0">
                                    <button
                                        className="text-blue-500 hover:underline font-mono font-medium cursor-pointer"
                                        onClick={() => handleEdit(c.id, c.message)}
                                    >
                                        Tahrirlash
                                    </button>
                                    <button
                                        className="text-red-500 hover:underline font-medium font-mono cursor-pointer"
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
            <ScrollToTop />
        </div>
    );
}
