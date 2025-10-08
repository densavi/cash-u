'use client'

import { useState } from "react";
import styles from "./Filter.module.css";

export default function Filter() {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [exchanger, setExchanger] = useState("");
    const [currency, setCurrency] = useState("");
    const [currency2, setCurrency2] = useState("");
    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={`${styles.filterSelect} ${styles.mb16}`}>
                    <label htmlFor="city">Країна</label>
                    <select
                        id="city"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className={country ? styles.selected : ""}
                    >
                        <option value="" disabled>Введіть країну</option>
                        <option value="Україна">Україна</option>
                    </select>
                </div>

                <div className={`${styles.filterSelect} ${styles.mb16}`}>
                    <label htmlFor="city">Місто</label>
                    <select
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className={city ? styles.selected : ""}
                    >
                        <option value="" disabled>Введіть місто</option>
                        <option value="Київ">Київ</option>
                    </select>
                </div>

                <div className={`${styles.filterSelect} ${styles.mb16}`}>
                    <label htmlFor="exchanger">Обмінник</label>
                    <select
                        id="exchanger"
                        value={exchanger}
                        onChange={(e) => setExchanger(e.target.value)}
                        className={exchanger ? styles.selected : ""}
                    >
                        <option value="" disabled>Оберіть обмінник</option>
                        <option value="Обмінник 1">Обмінник 1</option>
                    </select>
                </div>

                <div className={`${styles.wrapp} ${styles.mb16}`}>
                    <div className={`${styles.filterSelect}`}>
                        <label htmlFor="exchanger">Вношу</label>
                        <input className={styles.input} type="number" id="exchanger" placeholder="Введіть сумму" />
                    </div>
                    <div className={`${styles.filterSelect} ${styles.filterSelectSmall}`}>
                        <select
                            id="currency"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className={currency ? styles.selected : ""}
                        >
                            <option value="">UAH</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                </div>


                <div className={`${styles.wrapp} ${styles.mb16}`}>
                    <div className={`${styles.filterSelect}`}>
                        <label htmlFor="receive">Отримую</label>
                        <input className={styles.input} type="number" id="receive" placeholder="Введіть сумму" />
                    </div>
                    <div className={`${styles.filterSelect} ${styles.filterSelectSmall}`}>
                        <select
                            id="currency2"
                            value={currency2}
                            onChange={(e) => setCurrency2(e.target.value)}
                            className={currency2 ? styles.selected : ""}
                        >
                            <option value="">UAH</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                </div>

                <button className="btn btn-purple btn-fullwidth">Знайти</button>

            </div>
        </div>
    )
}