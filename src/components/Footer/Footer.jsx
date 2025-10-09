import styles from "./Footer.module.css";

import Link from "next/link";
import Image from "next/image";

import Subscribe from "@/components/Subscribe/Subscribe";
import SocialLinks from "@/components/SocialLinks/SocialLinks";

export default function Footer() {

    const footerMenus = [
        {
            title: "Компанія",
            items: [
                { name: "Про нас", link: "/" },
                { name: "Партнерам", link: "/" },
                { name: "Підтримка", link: "/" },
            ],
        },
        {
            title: "Партнерство",
            items: [
                { name: "Обмінники", link: "/" },
                { name: "Партнерам", link: "/" },
            ],
        },
        {
            title: "Ресурси",
            items: [
                { name: "Terms & Conditions", link: "/" },
                { name: "Privacy Policy", link: "/" },
                { name: "Умови та політики", link: "/" },
            ],
        },
        {
            title: "Контакти",
            items: [
                { name: "Підтримка", link: "/", },
            ],
        },
    ];


    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.head}>
                            <div className={styles.left}>

                                <Link href="/" className={styles.logo}>
                                    <Image src="/images/logo.svg" width={105} height={40} alt="" />
                                </Link>

                                <div className={styles.menuMobile}>
                                    {footerMenus.map((menu, index) => (
                                        <div key={index} className={styles.menu}>
                                            <h4 className={`${styles.menuTitle} text-gradient-1`}>{menu.title}</h4>
                                            <ul className={styles.menuList}>
                                                {menu.items.map((item, idx) => (
                                                    <li key={idx} className={styles.menuItem}>
                                                        <Link
                                                            href={item.link}
                                                            className={styles.menuLink}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <Subscribe />

                                <h4 className={`${styles.subscribeTitle} text-gradient-1`}>Контакти</h4>

                                <SocialLinks />

                            </div>
                            <div className={styles.right}>

                                {footerMenus.map((menu, index) => (
                                    <div key={index} className={styles.menu}>
                                        <h4 className={`${styles.menuTitle}`}>{menu.title}</h4>
                                        <ul className={styles.menuList}>
                                            {menu.items.map((item, idx) => (
                                                <li key={idx} className={styles.menuItem}>
                                                    <Link
                                                        href={item.link}
                                                        className={styles.menuLink}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className={styles.foot}>
                            <p className={styles.copyright}>© 2025 Cash-U. All rights reserved</p>
                            <p className={styles.author}>Розробка сайту — Zagorodniy Studio</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}