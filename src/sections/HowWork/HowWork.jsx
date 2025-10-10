"use client";

import styles from './HowWork.module.css';
import Heading from "@/components/Heading/Heading";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HowWork() {

    const sectionRef = useRef(null);
    const meteorRef = useRef(null);
    const meteor2Ref = useRef(null);
    const [activeStep, setActiveStep] = useState(0);
    const itemRefs = useRef([]);
    const diagramRef = useRef(null);
    const markerRefs = useRef([]);
    const [markerCenters, setMarkerCenters] = useState([]);
    const [pointHeight, setPointHeight] = useState(0);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.5
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = itemRefs.current.indexOf(entry.target);
                    if (index !== -1) {
                        setActiveStep(index);
                        // Поднимаем высоту линии до центра соответствующего маркера
                        if (markerCenters && markerCenters.length) {
                            const clampedIndex = Math.max(0, Math.min(index, markerCenters.length - 1));
                            setPointHeight(markerCenters[clampedIndex]);
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        itemRefs.current.forEach((item) => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [markerCenters]);

    // Измеряем точные позиции кругов-меток по отношению к диаграмме
    useEffect(() => {
        const measure = () => {
            const diagramEl = diagramRef.current;
            if (!diagramEl) return;
            const diagRect = diagramEl.getBoundingClientRect();
            const centers = markerRefs.current
                .filter(Boolean)
                .map((el) => {
                    const r = el.getBoundingClientRect();
                    return (r.top - diagRect.top) + (r.height / 2);
                });
            setMarkerCenters(centers);
            if (centers.length) {
                setPointHeight(centers[Math.max(0, Math.min(activeStep, centers.length - 1))]);
            }
        };

        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [activeStep]);

    useEffect(() => {
        const sectionEl = sectionRef.current;
        const m1 = meteorRef.current;
        const m2 = meteor2Ref.current;
        if (!sectionEl || !m1 || !m2) return;

        if (typeof window !== "undefined" && window.innerWidth <= 768) {
            return;
        }

        let rafId = 0;
        let targetX = 0, targetY = 0;
        let curX1 = 0, curY1 = 0;
        let curX2 = 0, curY2 = 0;

        const speed1 = 0.02; 
        const speed2 = 0.015; 
        const ease = 0.12;

        const onMouseMove = (e) => {
            const rect = sectionEl.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            targetX = dx;
            targetY = dy;
            if (!rafId) rafId = requestAnimationFrame(tick);
        };

        const onMouseLeave = () => {
            targetX = 0;
            targetY = 0;
            if (!rafId) rafId = requestAnimationFrame(tick);
        };

        const tick = () => {
            const desiredX1 = targetX * speed1;
            const desiredY1 = targetY * speed1;
            const desiredX2 = Math.max(0, -targetX * speed2);
            const desiredY2 = -targetY * speed2;

            curX1 += (desiredX1 - curX1) * ease;
            curY1 += (desiredY1 - curY1) * ease;
            curX2 += (desiredX2 - curX2) * ease;
            curY2 += (desiredY2 - curY2) * ease;

            m1.style.transform = `translate3d(${curX1.toFixed(2)}px, ${curY1.toFixed(2)}px, 0)`;
            m2.style.transform = `translate3d(${curX2.toFixed(2)}px, ${curY2.toFixed(2)}px, 0)`;

            if (Math.abs(curX1 - desiredX1) > 0.2 || Math.abs(curY1 - desiredY1) > 0.2 ||
                Math.abs(curX2 - desiredX2) > 0.2 || Math.abs(curY2 - desiredY2) > 0.2) {
                rafId = requestAnimationFrame(tick);
            } else {
                rafId = 0;
            }
        };

        sectionEl.addEventListener("mousemove", onMouseMove);
        sectionEl.addEventListener("mouseleave", onMouseLeave);

        return () => {
            sectionEl.removeEventListener("mousemove", onMouseMove);
            sectionEl.removeEventListener("mouseleave", onMouseLeave);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    const HowWorkData = [
        {
            title: "Подайте заявку",
            description: "Заповніть форму вказавши інформацію про вашу обмінну мережу та підтримувані активи"
        },
        {
            title: "Інтеграція та налаштування",
            description: "Після схвалення отримайте доступ до нашої панелі управління для налаштування курсів,касирів та замовлень"
        },
        {
            title: "Залучайте клієнтів",
            description: "Використовуйте нашу клієнтську базу та автоматизовані інструменти для зростання вашого бізнесу"
        },
    ]

    return (
        <section ref={sectionRef} className={styles.howWork}>
            <div className="container">
                <Heading imageSrc="/images/PuzzlePiece.svg" title="CASH-U – це інноваційна платформа"/>
                <h4 className={`${styles.title} title`}>Як працює наш маркетплейс?</h4>
            </div>
            <div className={styles.container}>

                <div className={styles.list}>
                    <div ref={diagramRef} className={styles.diagram}>
                        <div
                            ref={(el) => markerRefs.current[0] = el}
                            className={(markerCenters[0] !== undefined && pointHeight >= markerCenters[0]) ? styles.active : ''}
                        >
                            <span>01</span>
                        </div>
                        <div
                            ref={(el) => markerRefs.current[1] = el}
                            className={(markerCenters[1] !== undefined && pointHeight >= markerCenters[1]) ? styles.active : ''}
                        >
                            <span>02</span>
                        </div>
                        <div
                            ref={(el) => markerRefs.current[2] = el}
                            className={(markerCenters[2] !== undefined && pointHeight >= markerCenters[2]) ? styles.active : ''}
                        >
                            <span>03</span>
                        </div>
                        <p
                            className={styles.point}
                            style={{
                                height: `${Math.max(0, Math.min(pointHeight, 9999))}px`,
                                transition: 'height 0.3s ease-out'
                            }}
                        ></p>
                    </div>
                    {HowWorkData.map((item, index) => (
                        <div 
                            key={index} 
                            ref={(el) => itemRefs.current[index] = el}
                            className={styles.item}
                        >
                            <div className={styles.content}>
                                <h5 className={styles.heading}>{ item.title }</h5>
                                <p className={styles.description}>{ item.description }</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className={styles.button}>
                    <Link href="#" className="btn btn-purple btn-lg">
                        Стати партнером
                    </Link>
                </div>
            </div>

            <div ref={meteorRef} className={styles.meteor}></div>
            <div ref={meteor2Ref} className={styles.meteor2}></div>

        </section>
    )
}