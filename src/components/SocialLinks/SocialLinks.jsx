import styles from "./SocialLinks.module.css";

import Link from "next/link";
import Image from "next/image";

export default function SocialLinks() {

    const socialLinks = [
        { href: "https://instagram.com/", icon: "/images/instagram.svg", iconWidth: 19, iconHeight: 19 },
        { href: "https://fb.com/", icon: "/images/fb.svg", iconWidth: 10, iconHeight: 18 },
        { href: "https://www.tiktok.com/", icon: "/images/tiktok.svg", iconWidth: 19, iconHeight: 19 },
    ]

    return (
        <ul className={`${styles.socialLinks}`}>
            {socialLinks.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className={styles.socialLink}>
                        <Image src={link.icon} alt="Social Link 1" width={link.iconWidth} height={link.iconHeight} />
                    </Link>
                </li>
            ))}
        </ul>
    )
}