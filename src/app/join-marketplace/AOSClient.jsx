'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSClient() {
    useEffect(() => {
        // Инициализация AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    return null; // Этот компонент ничего не рендерит
}
