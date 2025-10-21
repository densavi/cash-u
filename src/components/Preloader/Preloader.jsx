'use client';

import { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [showText, setShowText] = useState(true);
    const [showLogo, setShowLogo] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [shouldHide, setShouldHide] = useState(false);

    useEffect(() => {
        // Анимация процентов от 0 до 100
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 60);

        // Показываем логотип на 80% и скрываем текст
        const logoTimeout = setTimeout(() => {
            setShowText(false);
            setShowLogo(true);
        }, 2400);

        // Начинаем скрывать прелоадер
        const hideTimeout = setTimeout(() => {
            setShouldHide(true);
            // Полностью удаляем через время анимации
            setTimeout(() => {
                setIsVisible(false);
            }, 800); // Время анимации исчезновения
        }, 3500);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(logoTimeout);
            clearTimeout(hideTimeout);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`${styles.preloader} ${shouldHide ? styles.preloaderHidden : ''}`}>
            <div className={styles.lineTop}></div>
            <div className={styles.lineMiddle}></div>
            <div className={styles.lineBottom}></div>
            
            <div className={`${styles.preloaderText} ${showText ? styles.textVisible : styles.textHidden}`}>
                Ще один обмінник, але...
            </div>
            
            <img 
                src="/images/preloader-logo.svg" 
                alt="logo" 
                className={`${styles.preloaderLogo} ${showLogo ? styles.logoVisible : styles.logoHidden}`} 
            />

            <div className={styles.percent}>
                {progress}%
            </div>
        </div>
    )
}