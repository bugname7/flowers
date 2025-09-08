"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!endRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
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
            <div ref={endRef}></div> {/* Sahifa oxiri */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-pink-200 cursor-pointer text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition"
                >
                    🌸
                </button>

            )}
        </>
    );
}
