import Link from "next/link";
import Image from "next/image";

import styles from "./MobileMenu.module.css";

import CloseIcon from "@/icons/CloseIcon";
import SocialLinks from "@/components/SocialLinks/SocialLinks";

export default function MobileMenu({ isOpen, menuItems, onClose }) {
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
                            <CloseIcon />
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

                    <div className={styles.buttons}>
                        <Link className="btn" href="/">Увійти</Link>
                        <Link className="btn btn-purple" href="/">Зареєструватися</Link>
                    </div>

                    <div className={styles.line}></div>

                    <SocialLinks />

                </div>
            </div>
        </div>
    );
}