'use client';

import { useEffect, useRef } from 'react';
import MarketplaceExchangers from "@/sections/MarketplaceExchangers/MarketplaceExchangers";
import ForClients from "@/sections/ForClients/ForClients";
import ForPartners from "@/sections/ForPartners/ForPartners";
import Faq from "@/sections/Faq/Faq";

export default function Home() {
    const planetRef = useRef(null);
    const footerBgRef = useRef(null);
    const lastScrollY = useRef(0);
    const scale = useRef(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!footerBgRef.current) return;

            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY.current;
            
            // Определяем направление скролла
            if (scrollDelta > 0) {
                // Скролл вниз - увеличиваем
                scale.current = Math.min(scale.current + 0.0005, 1.03);
            } else if (scrollDelta < 0) {
                // Скролл вверх - уменьшаем
                scale.current = Math.max(scale.current - 0.0005, 1.0);
            }

            // Применяем масштабирование
            footerBgRef.current.style.transform = `scale(${scale.current})`;
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ClientsData = {
        headingIcon: '/images/ShieldCheck.svg',
        headingText: 'Надійний захист / Швидкі транзакції / 125+ Партнерів',
        title: 'Клієнтам',
        list: [
            {
                icon: '/images/for-clients-1.svg',
                title: 'Легкий доступ до обмінних мереж',
                description: 'Обирайте зручні обмінні мережі та пункти видачі готівки в один клік'
            },
            {
                icon: '/images/for-clients-2.jpg',
                title: 'Швидкі та надійні транзакції',
                description: 'Обмінюйте криптовалюту та фіат миттєво з гарантією безпеки'
            },
            {
                icon: '/images/for-clients-3.jpg',
                title: 'Зручний пошук по локаціям',
                description: 'Керуйте обмінами з доступом до ваших улюблених мереж'
            },
            {
                icon: '/images/for-clients-4.jpg',
                title: 'Реальні курси в реальному часі',
                description: 'Керуйте обмінами з доступом до ваших улюблених мереж'
            },
        ],
        buttonText: 'Зареєструватися',
        buttonLink: '#',
        // background: '/images/for-clients-bg.png',
    }

    return (
        <>
            <MarketplaceExchangers />
            <div ref={planetRef} className="planet"></div>
            <div className="sections-bg">
                <ForClients sectionData={ClientsData} />
                <ForPartners />
            </div>

            <div className="footer-bg">
                <img ref={footerBgRef} className="footer-bg__image" src="/images/footer-bg-2.png" alt="" />
                <Faq />
            </div>
        </>
    );
}
