import styles from './Heading.module.css';

import Image from "next/image";

export default function Heading({title, iconText, imageSrc}) {
    return (
        <h5 className={styles.heading}>
            <div className={styles.wrapper}>
                <div className={styles.icon}>
                    <Image src={imageSrc} alt="Social Link 1" width="18" height="18" />
                    {iconText}
                </div>
                <p className="text-gradient-2">{title}</p>
            </div>
        </h5>
    )
}