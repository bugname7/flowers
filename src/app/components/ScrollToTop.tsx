"use client";
import { useEffect, useRef } from "react";

export default function ScrollToTop() {
    const btnRef = useRef<HTMLButtonElement>(null);
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!endRef.current || !btnRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    btnRef.current!.style.display = "block";
                } else {
                    btnRef.current!.style.display = "none";
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(endRef.current);

        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div ref={endRef}   ></div> 
            <button
                ref={btnRef}
                onClick={scrollToTop}
                style={{ display: "none" }}
                className="fixed bottom-10 right-10 bg-pink-200 cursor-pointer text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition"
            >
                🌸
            </button>
        </>
    );
}
