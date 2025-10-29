'use client';
import {useState} from "react";

import Link from "next/link";
import Image from "next/image";

import Lang from '@/components/Lang/Lang';

import styles from "./MobileMenu.module.css";

import CloseIcon from "@/icons/CloseIcon";
import SocialLinks from "@/components/SocialLinks/SocialLinks";

export default function MobileMenu({isOpen, menuItems, onClose}) {
    const [user, setUser] = useState('user');
    return (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/images/logo.svg"
                                alt=""
                                fill
                            />
                        </Link>

                        <button className={styles.close} onClick={onClose}>
                            <CloseIcon/>
                        </button>
                    </div>

                    <nav className={styles.nav}>
                        {menuItems.map((item) => (
                            <Link key={item.href} href={item.href} className={styles.link} onClick={onClose}>
                                {item.icon}
                                {item.title}
                            </Link>
                        ))}
                    </nav>

                    <div className={user ? styles.buttonsLoggedIn : styles.buttons}>
                        {user && (
                            <Link className="login-button" href="/">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_872_628)">
                                        <path
                                            d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2 13.5C3.21063 11.4081 5.40937 10 8 10C10.5906 10 12.7894 11.4081 14 13.5"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_872_628">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                                Кабінет
                            </Link>
                        )}
                        {!user && (
                            <>
                                <Link className="btn" href="/">Увійти</Link>
                                <Link className="btn btn-purple" href="/">Зареєструватися</Link>
                            </>
                        )}


                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.foot}>
                        <SocialLinks/>
                        <Lang/>
                    </div>

                </div>
            </div>
        </div>
    );
}