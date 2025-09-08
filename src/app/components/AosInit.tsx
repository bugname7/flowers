"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function AosInit() {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true, 
            mirror: false,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [pathname]);

    return null; 
}
