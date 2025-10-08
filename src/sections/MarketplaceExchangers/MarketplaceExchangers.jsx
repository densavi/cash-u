import styles from "./MarketplaceExchangers.module.css";

import Heading from "@/components/Heading/Heading";
import Filter from "./Filter";
import List from "./List";

export default function MarketplaceExchangers() {

    const FiatList = [
        {
            logo: 'images/kitlogo.svg',
            name: 'Kyt obmin',
            rate: '41,65',
            address: 'вул. Саксаганського, 87',
            rating: 2.2,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/Obmenat24.svg',
            name: 'Obmenat24',
            rate: '41,65',
            address: 'Галицька пл., 3',
            rating: 3.5,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/menora.svg',
            name: 'Менора',
            rate: '41,65',
            address: 'Берестейський проспект, 136',
            rating: 4.9,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/21Vik.svg',
            name: '21Vik',
            rate: '41,65',
            address: 'вул. Євгена Чикаленка, 20',
            rating: 3.4,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/X-change.svg',
            name: 'Kyt obmin',
            rate: '41,65',
            address: 'вул. Саксаганського, 87',
            rating: 2.5,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/kitlogo.svg',
            name: 'Kyt obmin',
            rate: '41,65',
            address: 'вул. Саксаганського, 87',
            rating: 5.0,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/kitlogo.svg',
            name: 'Kyt obmin',
            rate: '41,65',
            address: 'вул. Саксаганського, 87',
            rating: 4.5,
            votes: '52',
            link: '#',
        },
    ]

    const CryptoList = [
        {
            logo: 'images/kitlogo.svg',
            name: 'Kyt obmin',
            rate: '41,65',
            address: 'вул. Саксаганського, 87',
            rating: 4.5,
            votes: '52',
            link: '#',
        },
        {
            logo: 'images/Obmenat24.svg',
            name: 'Obmenat24',
            rate: '41,65',
            address: 'Галицька пл., 3',
            rating: 4.4,
            votes: '52',
            link: '#',
        }
    ]

    return (
        <section className={styles.MarketplaceExchangers}>
            <div className={styles.container}>
                <Heading title={<>рейтинг від <span>2,000+</span> клієнтів</>} iconText="4.9" imageSrc="images/star.svg" />
                <h1 className={`${styles.title} text-gradient-2`}>Маркетплейс обмінників</h1>
                <p className={styles.description}>Перший маркетплейс з гнучким валюто-та крипто-обміном з надійними обмінниками</p>

                <div className={styles.wrapper}>
                    <Filter />
                    <List
                        FiatList={FiatList}
                        CryptoList={CryptoList}
                    />
                </div>

            </div>
        </section>
    )
}