'use client';

import { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
    const [progress, setProgress] = useState(1);
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const duration = 2000;
        const interval = 50;
        const increment = 100 / (duration / interval);
        
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsVisible(false);
                        setTimeout(() => {
                            setShouldRender(false);
                        }, 500);
                    }, 500);
                    return 100;
                }
                return Math.min(prev + increment, 100);
            });
        }, interval);

        return () => {
            clearInterval(timer);
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
        </div>
    )
}