import styles from "./SocialLinks.module.css";

import Link from "next/link";

import InstagramIcon from '@/icons/InstagramIcon';
import FbIcon from '@/icons/fbIcon.jsx';
import TikTokIcon from '@/icons/TikTokIcon.jsx';

export default function SocialLinks() {

    const socialLinks = [
        { href: "https://instagram.com/", icon: <InstagramIcon /> },
        { href: "https://fb.com/", icon: <FbIcon /> },
        { href: "https://www.tiktok.com/", icon: <TikTokIcon /> },
    ]

    return (
        <ul className={`${styles.socialLinks}`}>
            {socialLinks.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className={styles.socialLink}>
                        {link.icon}
                    </Link>
                </li>
            ))}
        </ul>
    )
}