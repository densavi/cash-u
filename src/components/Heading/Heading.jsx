

import styles from './Heading.module.css';

import Image from "next/image";

export default function Heading({title, iconText, imageSrc, className}) {
    return (
        <div className={`${styles.headingAlign} ${className}`} data-aos="fade-up">
            <h5 className={styles.heading}>
                <div className={styles.wrapper}>
                    <div className={styles.icon}>
                        <Image src={imageSrc} alt="Social Link 1" width="18" height="18" />
                        {iconText}
                    </div>
                    <p className={styles.headingGradient}>{title}</p>
                </div>
            </h5>
        </div>

    )
}