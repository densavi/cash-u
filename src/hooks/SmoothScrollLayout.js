"use client"; // обязательно, чтобы этот компонент рендерился только на клиенте

import { useEffect } from "react";
import gsap from "gsap";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function SmoothScrollLayout({ children }) {
    useEffect(() => {
        // Проверяем, что window существует
        if (typeof window === "undefined") return;

        let smootherInstance = null;
        let detachFallback = null;

        (async () => {
            // Пытаемся подключить ScrollSmoother динамически; если недоступен, включаем fallback
            let ScrollSmootherPlugin = null;
            try {
                // Попытка стандартного импорта плагина (может отсутствовать в сборке)
                const mod = await import("gsap/ScrollSmoother");
                ScrollSmootherPlugin = mod?.ScrollSmoother;
            } catch (_) {
                // noop — плагин недоступен
            }

            if (ScrollSmootherPlugin) {
                try {
                    gsap.registerPlugin(ScrollSmootherPlugin);
                    smootherInstance = ScrollSmootherPlugin.create({
                        wrapper: "#wrapper",
                        content: "#content",
                        smooth: 4,
                        effects: true,
                    });
                    return;
                } catch (_) {
                    // если создание не удалось — переходим к fallback
                }
            }

            // Fallback: замедляем нативный скролл, масштабируя колесо мыши
            const scale = 0.3; // меньше — медленнее
            const onWheel = (e) => {
                // Включаем только для вертикального wheel, оставляя тач/клавиатуру нетронутыми
                e.preventDefault();
                const deltaY = e.deltaY * scale;
                window.scrollBy({ top: deltaY, behavior: "smooth" });
            };
            window.addEventListener("wheel", onWheel, { passive: false });
            detachFallback = () => window.removeEventListener("wheel", onWheel);
        })();

        return () => {
            if (smootherInstance?.kill) smootherInstance.kill();
            if (detachFallback) detachFallback();
        };
    }, []);

    return (
        <div id="wrapper">
            <Header />
            <div id="content">{children}</div>
            <Footer />
        </div>
    );
}
