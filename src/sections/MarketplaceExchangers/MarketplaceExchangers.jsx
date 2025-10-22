'use client';
import { useEffect, useRef } from 'react';
import styles from "./MarketplaceExchangers.module.css";
import Filter from "./Filter";
import List from "./List";


export default function MarketplaceExchangers() {

    const planetRef = useRef(null);
    const lastPosition = useRef({ planetX: 0, planetY: 0 });
    const scrollPosition = useRef({ planetScrollY: 0 });

    const FiatList = [
        {
            logo: 'images/kitlogo.svg',
            name: 'Kyt obmin',
            rate: '41,65',
            address: 'вул. Саксаганського, 87',
            rating: 2.2,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/Obmenat24.svg',
            name: 'Obmenat24',
            rate: '41,65',
            address: 'Галицька пл., 3',
            rating: 3.5,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/menora.svg',
            name: 'Менора',
            rate: '41,65',
            address: 'Берестейський проспект, 136',
            rating: 4.9,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/21Vik.svg',
            name: '21Vik',
            rate: '41,65',
            address: 'вул. Євгена Чикаленка, 20',
            rating: 3.4,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/X-change.svg',
            name: 'Kyt obmin',
            rate: '41,65',
            address: 'вул. Саксаганського, 87',
            rating: 2.5,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/kitlogo.svg',
            name: 'Kyt obmin',
            rate: '41,65',
            address: 'вул. Саксаганського, 87',
            rating: 5.0,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/kitlogo.svg',
            name: 'Kyt obmin',
            rate: '41,65',
            address: 'вул. Саксаганського, 87',
            rating: 4.5,
            votes: '52',
            link: '#',
        },
    ]

    const CryptoList = [
        {
            logo: 'images/kitlogo.svg',
            name: 'Kyt obmin',
            rate: '41,65',
            address: 'вул. Саксаганського, 87',
            rating: 4.5,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/Obmenat24.svg',
            name: 'Obmenat24',
            rate: '41,65',
            address: 'Галицька пл., 3',
            rating: 4.4,
            votes: '52',
            link: '#',
        }
    ]

    useEffect(() => {
        const updateTransforms = () => {
            const planetScale = 1 + Math.abs(lastPosition.current.planetX) / 200;

            if (planetRef.current) {
                planetRef.current.style.transform = `translate(${lastPosition.current.planetX}px, ${lastPosition.current.planetY + scrollPosition.current.planetScrollY}px) scale(${planetScale})`;
            }
           
        };

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const maxOffset = 5;
            let planetOffsetX = ((clientX - centerX) / centerX) * maxOffset;
            let planetOffsetY = ((clientY - centerY) / centerY) * maxOffset;

            const damping = 0.05;
            lastPosition.current.planetX += (planetOffsetX - lastPosition.current.planetX) * damping;
            lastPosition.current.planetY += (planetOffsetY - lastPosition.current.planetY) * damping;

            lastPosition.current.planetX = Number(lastPosition.current.planetX.toFixed(2));
            lastPosition.current.planetY = Number(lastPosition.current.planetY.toFixed(2));

            updateTransforms();
        };

        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollPosition.current.planetScrollY = scrollY * 0.05; // 50px на 1000px скролла
            scrollPosition.current.planetScrollY = Number(scrollPosition.current.planetScrollY.toFixed(2));

            console.log('Scroll:', {
                scrollY,
                planetScrollY: scrollPosition.current.planetScrollY,
            });

            updateTransforms();
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <section className={styles.MarketplaceExchangers}>
            <div className={styles.container}>
                <h1 className={`${styles.title}`}><span data-aos="fade-up">Фінансовий маркетплейс</span></h1>
                <p className={styles.description} data-aos="fade-up" data-aos-delay="100">Перший маркетплейс з гнучким валюто-та крипто-обміном з надійними обмінниками</p>

                <div className={styles.wrapper}>
                    <Filter />
                    <List
                        FiatList={FiatList}
                        CryptoList={CryptoList}
                    />
                </div>

            </div>

            
            {/* <div className={styles.planetVideo}>
                <video src="/video/planet.mp4" autoPlay muted loop />
            </div> */}
            <div className={styles.meteor}></div>

        </section>
    )
}