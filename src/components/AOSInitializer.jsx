'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePreloader } from '@/contexts/PreloaderContext';

export default function AOSInitializer() {
    const { isAOSReady } = usePreloader();

    useEffect(() => {
        if (isAOSReady) {
            // Инициализация AOS только после исчезновения прелоадера
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        }
    }, [isAOSReady]);

    return null; // Этот компонент ничего не рендерит
}
