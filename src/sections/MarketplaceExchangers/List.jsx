import Image from "next/image";

import styles from "./List.module.css";

export default function List() {
    return (
        <div className={styles.list}>
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <ul className={styles.tabs}>
                        <li className={styles.activeTab}>
                            Fiat
                        </li>
                        <li>
                            Crypto
                        </li>
                    </ul>

                    <a href="#" className={styles.mapLink}>
                        <Image src="images/MapPin.svg" alt="Map pin" width="18" height="18" />
                        <span>На мапі</span>
                    </a>
                </div>
            </div>
        </div>
    )
}