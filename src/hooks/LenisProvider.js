"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children, lerp = 0.08, wheelMultiplier = 0.6 }) {
    useEffect(() => {
        if (typeof window === "undefined") return;
        // Do not early-return; some Windows setups misreport this and block wheel
    
        const lenis = new Lenis({
            lerp,
            wheelMultiplier,
            smoothWheel: true,
            smoothTouch: false,
            touchMultiplier: 1,
            normalizeWheel: true,
            syncTouch: true,
            gestureOrientation: 'vertical',
            wheelEventsTarget: document.documentElement, // scroll on html, keep body non-scrollable
        });
        // no global exposure
    
        let rafId;
        const frame = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(frame);
        };
        rafId = requestAnimationFrame(frame);
    
        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, [lerp, wheelMultiplier]);
    

    return <>{children}</>;

}


