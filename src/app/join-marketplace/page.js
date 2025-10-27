'use client';

import { useEffect, useRef } from 'react';
import HeroSection from "@/sections/HeroSection/HeroSection";
import Contacts from "@/sections/Contacts/Contacts";
import ForClients from "@/sections/ForClients/ForClients";
import Partners from "@/sections/Partners/Partners";
import HowWork from "@/sections/HowWork/HowWork";
import Reviews from "@/sections/Reviews/Reviews";
import Faq from "@/sections/Faq/Faq";

export default function JoinMarketplace() {
    const footerBgRef = useRef(null);
    const lastScrollY = useRef(0);
    const scale = useRef(1);

    useEffect(() => {
        // Устанавливаем заголовок страницы
        document.title = "Приєднуйтесь до маркетплейсу обмінних мереж";

        const handleScroll = () => {
            if (!footerBgRef.current) return;

            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY.current;
            
            // Определяем направление скролла
            if (scrollDelta > 0) {
                // Скролл вниз - увеличиваем
                scale.current = Math.min(scale.current + 0.002, 1.5);
            } else if (scrollDelta < 0) {
                // Скролл вверх - уменьшаем
                scale.current = Math.max(scale.current - 0.002, 1.0);
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

    const BenefitsData = {
        headingIcon: '/images/ShieldCheck.svg',
        headingText: 'Надійність / База клієнтів / Автоматизація бізнесу',
        title: 'Наші переваги',
        list: [
            {
                title: 'Доступ до клієнтів',
                description: 'Використовуйте нашу клієнтську базу для збільшення обсягу транзакцій'
            },
            {
                title: 'Управління операціями',
                description: 'Керуйте касирами, курсами, замовленнями та налаштуваннями через єдиний інтерфейс'
            },
            {
                title: 'Безпека та довіра',
                description: 'Перевірені транзакції та надійна репутація маркетплейсу для розвитку вашого бізнесу.'
            },
            {
                title: 'Автоматизація процесів',
                description: 'Автоматизований парсинг курсів та обробка замовлень для підвищення ефективності.'
            },
        ],
    }

    return (
        <>
            <HeroSection />
            <ForClients sectionData={BenefitsData} />
            <Partners />
            <HowWork />
            <Reviews />
            <div className="footer-bg footer-bg-2">
                <img ref={footerBgRef} className="footer-bg__image" src="/images/footer-bg.png" alt=""/>
                <Contacts />
            </div>
        </>
    );
}
