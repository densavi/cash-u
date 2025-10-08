'use client'
import { useState } from 'react';

import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";

import styles from "./List.module.css";

export default function List({FiatList, CryptoList}) {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={styles.list}>
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

                    <a href="#" className={styles.mapLink}>
                        <Image src="images/MapPin.svg" alt="Map pin" width="18" height="18" />
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
                        <div className={styles.tab}>
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
                                        <div className={styles.address}  title={fiat.address}>
                                            {fiat.address}
                                        </div>
                                        <div className={styles.rating}>
                                            {fiat.rating} ({fiat.votes})
                                            <StarRating rating={fiat.rating} ratingId={`fiat-list-${index}`} />
                                        </div>
                                        <div className={styles.button}>
                                            <Link href={`/`} className="btn">
                                                Замовити
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                            </div>

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
                            <div className={styles.tab}>
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
                                            <div className={styles.address}  title={crypto.address}>
                                                {crypto.address}
                                            </div>
                                            <div className={styles.rating}>
                                                {crypto.rating} ({crypto.votes})
                                                <StarRating rating={crypto.rating} ratingId={`crypto-list-${index}`} />
                                            </div>
                                            <div className={styles.button}>
                                                <Link href={`/`} className="btn">
                                                    Замовити
                                                </Link>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>
    )
}