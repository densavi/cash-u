"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

import styles from "./Header.module.css";

import AboutIcon from "@/icons/AboutIcon";
import PartnersIcon from "@/icons/PartnersIcon";
import SupportIcon from "@/icons/SupportIcon";
import MenuIcon from "@/icons/MenuIcon";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

export default function Header() {

    const menuItems = [
        { title: "Про нас", href: "/about", icon: <AboutIcon /> },
        { title: "Партнерам", href: "/partners", icon: <PartnersIcon /> },
        { title: "Підтримка", href: "/support", icon: <SupportIcon /> },
    ];

    const [user, setUser] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const langs = [
        { value: 'ua', label: 'Укр' },
        { value: 'en', label: 'Eng' },
      ];

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <div className={styles.content}>

                            <nav className={styles.nav}>
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={styles.link}

                                    >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </nav>

                            <Link href="/" className={styles.logo}>
                                <Image
                                    src="/images/logo.svg"
                                    alt=""
                                    fill
                                />
                            </Link>


                            {user ? (
                                <>
                                    <span>Привет, {user}</span>
                                </>
                            ) : (
                                <div className={styles.login}>
                                    <Select 
                                    options={langs} 
                                    defaultValue={langs[0]} 
                                    className={styles.langSelect} 
                                    classNamePrefix="lang-select"
                                    />
                                    <Link className="btn" href="/">Увійти</Link>
                                    <Link className="btn btn-purple" href="/">Зареєструватися</Link>
                                </div>
                            )}

                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className={`btn btn-icon ${styles['menu-btn']}`}
                            >
                                <MenuIcon />
                                Меню
                            </button>

                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={isMobileMenuOpen}
                menuItems={menuItems}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
}