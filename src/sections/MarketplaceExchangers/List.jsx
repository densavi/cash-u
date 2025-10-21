'use client'
import {useState, useRef, useCallback, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import MapModal from "@/components/MapModal";
import MapModalContent from "@/components/MapModalContent";

import styles from "./List.module.css";

export default function List({FiatList, CryptoList}) {

    const [activeTab, setActiveTab] = useState(0);
    const [isMapOpen, setIsMapOpen] = useState(false);

    const fiatRef = useRef(null);
    const cryptoRef = useRef(null);

    const handleWheel = useCallback((el, e) => {
        if (!el) return;
        const atTop = el.scrollTop <= 0;
        const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
        const scrollingDown = e.deltaY > 0;
        const scrollingUp = e.deltaY < 0;
        const canScrollInside = (scrollingDown && !atBottom) || (scrollingUp && !atTop);
        if (canScrollInside) {
            e.preventDefault();
            e.stopPropagation();
            el.scrollTop += e.deltaY;
        }
    }, []);

    useEffect(() => {
        const attach = (el) => {
            if (!el) return () => {};
            let touchStartY = 0;
            const onWheel = (e) => handleWheel(el, e);
            const onTouchStart = (e) => {
                if (e.touches && e.touches.length > 0) {
                    touchStartY = e.touches[0].clientY;
                }
            };
            const onTouchMove = (e) => {
                if (!(e.touches && e.touches.length > 0)) return;
                const currentY = e.touches[0].clientY;
                const deltaY = touchStartY - currentY;
                const atTop = el.scrollTop <= 0;
                const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
                const scrollingDown = deltaY > 0;
                const scrollingUp = deltaY < 0;
                const canScrollInside = (scrollingDown && !atBottom) || (scrollingUp && !atTop);
                if (canScrollInside) {
                    e.preventDefault();
                    e.stopPropagation();
                    el.scrollTop += deltaY;
                }
            };
            el.addEventListener('wheel', onWheel, { passive: false });
            el.addEventListener('touchstart', onTouchStart, { passive: true });
            el.addEventListener('touchmove', onTouchMove, { passive: false });
            return () => {
                el.removeEventListener('wheel', onWheel);
                el.removeEventListener('touchstart', onTouchStart);
                el.removeEventListener('touchmove', onTouchMove);
            };
        };

        const detachFiat = attach(fiatRef.current);
        const detachCrypto = attach(cryptoRef.current);
        return () => {
            detachFiat && detachFiat();
            detachCrypto && detachCrypto();
        };
    }, [handleWheel]);

    return (
        <>
            <div className={styles.list} data-aos="fade-left">
                <div className={styles.wrapper}>
                    <div className={styles.head}>
                        <ul className={styles.tabs}>
                            <li
                                className={activeTab === 0 ? styles.activeTab : null}
                                onClick={() => setActiveTab(0)}
                            >
                                Fiat
                            </li>
                            <li
                                className={activeTab === 1 ? styles.activeTab : null}
                                onClick={() => setActiveTab(1)}
                            >
                                Crypto
                            </li>
                        </ul>

                        <a
                            href="#"
                            className={styles.mapLink}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMapOpen(true);
                            }}
                        >
                            <Image src="images/MapPin.svg" alt="Map pin" width="18" height="18"/>
                            <span>На мапі</span>
                        </a>
                    </div>

                    <div className={styles.tabsWrapper}>
                        {activeTab === 0 && (
                            <>
                                <div className={`${styles.row} ${styles.th}`}>
                                    <div className={styles.name}>
                                        <h5 className={styles.heading}>Обмінник</h5>
                                    </div>
                                    <div className={styles.rate}>
                                        <h5 className={styles.heading}>Курс</h5>
                                    </div>
                                    <div className={styles.address}>
                                        <h5 className={styles.heading}>Адреса</h5>
                                    </div>
                                    <div className={styles.rating}>
                                        <h5 className={styles.heading}>Рейтинг</h5>
                                    </div>
                                    <div className={styles.button}></div>
                                </div>
                                <div className={styles.tab} ref={fiatRef}>
                                    <div>
                                        {FiatList.map((fiat, index) => (
                                            <div key={index} className={styles.row}>
                                                <div className={styles.name}>
                                                    <div className={styles.logo}>
                                                        <img src={fiat.logo} alt=""/>
                                                    </div>
                                                    {fiat.name}
                                                </div>
                                                <div className={styles.rate}>
                                                    {fiat.rate}
                                                </div>
                                                <div className={styles.address} title={fiat.address}>
                                                    {fiat.address}
                                                </div>
                                                <div className={styles.rating}>
                                                    {fiat.rating} ({fiat.votes})
                                                    <StarRating rating={fiat.rating} ratingId={`fiat-list-${index}`}/>
                                                </div>
                                                <div className={styles.button}>
                                                    <Link href={fiat.link} className="btn">
                                                        Замовити
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}

                                    </div>

                                </div>

                                <div className={styles.tabMobile}>
                                    <div className={styles.tabMobileHero}>
                                        <span>Обмінник</span>
                                        <span>Курс</span>
                                    </div>
                                    {FiatList.map((fiat, index) => (
                                        <div key={index} className={styles.itemMobile}>
                                            <div className={styles.exchangeMobile}>
                                                <div className={styles.logoMobile}>
                                                    <img src={fiat.logo} alt=""/>
                                                </div>
                                                <div className={styles.ratingMobile}>
                                                    <p>
                                                        {fiat.rating} ({fiat.votes})
                                                    </p>
                                                    <Image src="images/star-1.svg" width="12" height="12" alt="rating" />
                                                </div>
                                                <div className={styles.addressMobile}>
                                                    {fiat.address}
                                                </div>
                                            </div>
                                            <div className={styles.exchangeRateMobile}>
                                                <div className={styles.exchangeRateMobileValue}>
                                                    {fiat.rate}
                                                </div>
                                                <a className="btn btn-purple btn-fullwidth btn-p-0" href={fiat.link}>
                                                    Замовити
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </>
                        )}

                        {activeTab === 1 && (
                            <>
                                <div className={`${styles.row} ${styles.th}`}>
                                    <div className={styles.name}>
                                        <h5 className={styles.heading}>Обмінник</h5>
                                    </div>
                                    <div className={styles.rate}>
                                        <h5 className={styles.heading}>Курс</h5>
                                    </div>
                                    <div className={styles.address}>
                                        <h5 className={styles.heading}>Адреса</h5>
                                    </div>
                                    <div className={styles.rating}>
                                        <h5 className={styles.heading}>Рейтинг</h5>
                                    </div>
                                    <div className={styles.button}></div>
                                </div>
                                <div
                                    className={styles.tab}
                                    ref={cryptoRef}
                                >
                                    <div>
                                        {CryptoList.map((crypto, index) => (
                                            <div key={index} className={styles.row}>
                                                <div className={styles.name}>
                                                    <div className={styles.logo}>
                                                        <img src={crypto.logo} alt=""/>
                                                    </div>
                                                    {crypto.name}
                                                </div>
                                                <div className={styles.rate}>
                                                    {crypto.rate}
                                                </div>
                                                <div className={styles.address} title={crypto.address}>
                                                    {crypto.address}
                                                </div>
                                                <div className={styles.rating}>
                                                    {crypto.rating} ({crypto.votes})
                                                    <StarRating rating={crypto.rating} ratingId={`crypto-list-${index}`}/>
                                                </div>
                                                <div className={styles.button}>
                                                    <Link href={crypto.link} className="btn">
                                                        Замовити
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}

                                    </div>

                                </div>

                                <div className={styles.tabMobile}>
                                    <div className={styles.tabMobileHero}>
                                        <span>Обмінник</span>
                                        <span>Курс</span>
                                    </div>
                                    {CryptoList.map((crypto, index) => (
                                        <div key={index} className={styles.itemMobile}>
                                            <div className={styles.exchangeMobile}>
                                                <div className={styles.logoMobile}>
                                                    <img src={crypto.logo} alt=""/>
                                                </div>
                                                <div className={styles.ratingMobile}>
                                                    <p>
                                                        {crypto.rating} ({crypto.votes})
                                                    </p>
                                                    <Image src="images/star-1.svg" width="12" height="12" alt="rating" />
                                                </div>
                                                <div className={styles.addressMobile}>
                                                    {crypto.address}
                                                </div>
                                            </div>
                                            <div className={styles.exchangeRateMobile}>
                                                <div className={styles.exchangeRateMobileValue}>
                                                    {crypto.rate}
                                                </div>
                                                <a className="btn btn-purple btn-fullwidth btn-p-0" href={crypto.link}>
                                                    Замовити
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </>
                        )}
                    </div>

                </div>

                <div className={styles.blurLeft}></div>
                <div className={styles.blurRight}></div>

            </div>
            <MapModal isOpen={isMapOpen} onRequestClose={() => setIsMapOpen(false)}>
                <MapModalContent onClose={() => setIsMapOpen(false)} />
            </MapModal>
        </>

    )
}