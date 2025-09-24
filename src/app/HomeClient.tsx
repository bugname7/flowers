"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Map from "./components/Map";
import ScrollToTop from "./components/ScrollToTop";
import FAQ from "./components/FAQ";
import Advice from "./components/Advice";
import News from "./components/News";
import Customer from "./components/Customer";
import Features from "./components/Features";
import Loading from "./components/Loading";

export default function HomePageClient() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="container mx-auto w-full px-8 overflow-x-hidden">
            {/* Hero section */}
            <div className="mx-auto mb-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div
                        className="relative w-full md:w-1/2 h-[200px] md:h-[400px] lg:h-[500px] mx-auto"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <Image
                            src="/images/3b1.jpg"
                            alt="kelin gul"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                        <h1 className="absolute md:bottom-[390px] left-6 top-4 md:left-10 text-black font-bold font-mono text-sm md:text-lg lg:text-2xl drop-shadow-md">
                            Uylaringizni <span className="text-pink-500">chiroyli</span> qiladigan gullar 🌸 —
                            har kuni <span className="text-pink-500">yangi</span> kayfiyat!
                        </h1>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">

                        
                        <div className="relative w-full h-40 md:h-60">
                            <Image
                                src="/images/arxideya1.jpg"
                                alt="arxideya1 gul"
                                fill
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="relative w-full h-40 md:h-60">
                            <Image
                                src="/images/znak.jpg"
                                alt="znak gul"
                                fill
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="relative w-full h-40 md:h-60 col-span-2">
                            <Image
                                src="/images/palmals.jpg"
                                alt="arxideya gul"
                                fill
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center my-8">
                <h2 className="text-xl md:text-2xl font-bold font-mono mb-4" data-aos="fade-up">
                    🌸 Eng so‘nggi gullarimizni kashf qiling!
                </h2>
                <Link
                    data-aos="zoom-out"
                    href="/catalog"
                    className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 font-mono transition"
                >
                    Katalogga o‘tish
                </Link>
            </div>

            <Features />
            <Customer />
            <News />
            <Advice />
            <FAQ />
            <ScrollToTop />
            <Map />
        </div>
    );
}
