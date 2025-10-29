'use client';

import { useState, useEffect } from 'react';
import { usePreloader } from '@/contexts/PreloaderContext';
import styles from './Preloader.module.css';

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [showText, setShowText] = useState(true);
    const [showLogo, setShowLogo] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [shouldHide, setShouldHide] = useState(false);
    const { hidePreloader } = usePreloader();

    const fullText = "Ще один обмінник, але...";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (!showText) return;

        const speed = 90;
        const interval = setInterval(() => {
            setDisplayedText((prev) => {
                if (prev.length >= fullText.length) {
                    clearInterval(interval);
                    return prev;
                }
                return fullText.slice(0, prev.length + 1);
            });
        }, speed);

        return () => clearInterval(interval);
    }, [showText, fullText]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 60);

        const logoTimeout = setTimeout(() => {
            setShowText(false);
            setShowLogo(true);
        }, 2400);

        const hideTimeout = setTimeout(() => {
            setShouldHide(true);
            hidePreloader(); 
            setTimeout(() => {
                setIsVisible(false);

                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }, 800); 
        }, 3500);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(logoTimeout);
            clearTimeout(hideTimeout);

            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
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
                {displayedText}
                {/*<span className={styles.cursor}></span>*/}
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