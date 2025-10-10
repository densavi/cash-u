'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [progress, setProgress] = useState(1);
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);
    const rafRef = useRef();

    const handleMouseMove = useCallback((e) => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(() => {
            const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
            const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
            
            setMousePosition({
                x: normalizedX,
                y: normalizedY
            });
        });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [handleMouseMove]);

    // Анимация прогресса
    useEffect(() => {
        const duration = 3000;
        const interval = 50;
        const increment = 100 / (duration / interval);
        

        const startTimer = setTimeout(() => {
            const timer = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(timer);
                        // Задержка перед исчезновением
                        setTimeout(() => {
                            setIsVisible(false);
                            // Полное удаление из DOM после анимации
                            setTimeout(() => {
                                setShouldRender(false);
                            }, 500);
                        }, 500);
                        return 100;
                    }
                    return Math.min(prev + increment, 100);
                });
            }, interval);
        }, 50);

        return () => {
            clearTimeout(startTimer);
        };
    }, []);
    if (!shouldRender) return null;

    return (
        <div className={`${styles.preloader} ${!isVisible ? styles.fadeOut : ''}`}>
            <img className={`${styles.planet} ${styles.planetGrow}`} src="/images/preloader-planet.png" alt="preloader" />
            <img className={`${styles.blur} ${styles.blur1}`} src="/images/preloader-blur.png" alt="" />
            <img className={`${styles.blur} ${styles.blur2}`} src="/images/preloader-blur.png" alt="" />
            <div className={styles.marquee}>
                <div className={styles.marqueeContent}>
                    <div className={styles.textItem}>
                        <img src="/images/Cash-U-Logo.svg" alt="" />
                    </div>
                    <div className={styles.textItem}>
                        <img src="/images/Cash-U-Logo.svg" alt="" />
                    </div>
                    <div className={styles.textItem}>
                        <img src="/images/Cash-U-Logo.svg" alt="" />
                    </div>
                    <div className={styles.textItem}>
                        <img src="/images/Cash-U-Logo.svg" alt="" />
                    </div>
                    <div className={styles.textItem}>
                        <img src="/images/Cash-U-Logo.svg" alt="" />
                    </div>
                    <div className={styles.textItem}>
                        <img src="/images/Cash-U-Logo.svg" alt="" />
                    </div>
                    <div className={styles.textItem}>
                        <img src="/images/Cash-U-Logo.svg" alt="" />
                    </div>
                    <div className={styles.textItem}>
                        <img src="/images/Cash-U-Logo.svg" alt="" />
                    </div>
                    <div className={styles.textItem}>
                        <img src="/images/Cash-U-Logo.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.loading}>
                <div className="container">
                    <div className={styles.rercents}>{Math.round(progress)}%</div>
                    <div className={styles.progress}>
                        <div className={styles.bg}>
                            <div 
                                className={styles.progressBar}
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <img 
                className={styles.top} 
                src="/images/preloader-top.png" 
                alt="" 
                style={{
                    transform: `translate(${Math.min(0, mousePosition.x) * 20}px, ${Math.min(0, mousePosition.y) * 20}px)`
                }}
            />
            <img 
                className={styles.bottom} 
                src="/images/preloader-bottom.png" 
                alt="" 
                style={{
                    transform: `translate(${Math.min(0, mousePosition.x) * -15}px, ${Math.min(0, mousePosition.y) * -15}px)`
                }}
            />
        </div>
    )
}