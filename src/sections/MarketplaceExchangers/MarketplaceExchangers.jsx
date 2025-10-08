import styles from "./MarketplaceExchangers.module.css";

import Heading from "@/components/Heading/Heading";
import Filter from "./Filter";
import List from "./List";

export default function MarketplaceExchangers() {
    return (
        <section className={styles.MarketplaceExchangers}>
            <div className={styles.container}>
                <Heading title={<>рейтинг від <span>2,000+</span> клієнтів</>} iconText="4.9" imageSrc="images/star.svg" />
                <h1 className={`${styles.title} text-gradient-2`}>Маркетплейс обмінників</h1>
                <p className={styles.description}>Перший маркетплейс з гнучким валюто-та крипто-обміном з надійними обмінниками</p>

                <div className={styles.wrapper}>
                    <Filter />
                    <List />
                </div>

            </div>
        </section>
    )
}