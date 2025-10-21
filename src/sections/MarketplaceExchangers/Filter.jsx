'use client'

import { useState } from "react";
import styles from "./Filter.module.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

export default function Filter() {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [exchanger, setExchanger] = useState("");
    const [currency, setCurrency] = useState("");
    const [currency2, setCurrency2] = useState("");

    const countries = [
        { value: 'Україна', label: 'Україна' },
        { value: 'Польща', label: 'Польща' },
        { value: 'Літва', label: 'Літва' },
        { value: 'Естонія', label: 'Естонія' },
        { value: 'Литва', label: 'Литва' },
        { value: 'Латвія', label: 'Латвія' },
        { value: 'Естонія', label: 'Естонія' },
        { value: 'Литва', label: 'Литва' },
    ];

    const cities = [
        { value: 'Київ', label: 'Київ' },
        { value: 'Львів', label: 'Львів' },
        { value: 'Одеса', label: 'Одеса' },
        { value: 'Харків', label: 'Харків' },
        { value: 'Дніпро', label: 'Дніпро' },
        { value: 'Запоріжжя', label: 'Запоріжжя' },
    ];

    const exchangers = [
        { value: 'Обмінник 1', label: 'Обмінник 1' },
        { value: 'Обмінник 2', label: 'Обмінник 2' },
        { value: 'Обмінник 3', label: 'Обмінник 3' },
        { value: 'Обмінник 4', label: 'Обмінник 4' },
        { value: 'Обмінник 5', label: 'Обмінник 5' },
    ];

    const currencies = [
        { value: 'UAH', label: 'UAH' },
        { value: 'USD', label: 'USD' },
        { value: 'EUR', label: 'EUR' },
    ];

    return (
        <div className={styles.filter} data-aos="fade-right">
            <div className={styles.wrapper}>
                <div className={`${styles.filterSelect} ${styles.mb16}`}>
                    <label htmlFor="country">Країна</label>
                    <Select
                        options={countries}
                        id="country"
                        defaultValue={countries[0]}
                        className={styles.select}
                        classNamePrefix="lang-select"
                    />
                </div>

                <div className={`${styles.filterSelect} ${styles.mb16}`}>
                    <label htmlFor="city">Місто</label>

                    <Select
                        options={cities}
                        id="city"
                        defaultValue={cities[0]}
                        className={styles.select}
                        classNamePrefix="lang-select"
                    />

                </div>

                <div className={`${styles.filterSelect} ${styles.mb16}`}>
                    <label htmlFor="exchanger">Обмінник</label>

                    <Select
                        options={exchangers}
                        id="exchanger"
                        defaultValue={exchangers[0]}
                        className={styles.select}
                        classNamePrefix="lang-select"
                    />
                </div>

                <div className={`${styles.wrapp} ${styles.mb16}`}>
                    <div className={`${styles.filterSelect}`}>
                        <label htmlFor="exchanger">Вношу</label>
                        <input className={styles.input} type="number" id="exchanger" placeholder="Введіть суму" />
                    </div>
                    <div className={`${styles.filterSelect} ${styles.filterSelectSmall}`}>
                        <Select
                            options={currencies}
                            id="currency"
                            defaultValue={currencies[0]}
                            className={styles.select}
                            classNamePrefix="lang-select"
                        />

                    </div>
                </div>


                <div className={`${styles.wrapp} ${styles.mb16}`}>
                    <div className={`${styles.filterSelect}`}>
                        <label htmlFor="receive">Отримую</label>
                        <input className={styles.input} type="number" id="receive" placeholder="Введіть суму" />
                    </div>
                    <div className={`${styles.filterSelect} ${styles.filterSelectSmall}`}>
                        <Select
                            options={currencies}
                            id="currency2"
                            defaultValue={currencies[0]}
                            className={styles.select}
                            classNamePrefix="lang-select"
                        />
                    </div>
                </div>

                <button className="btn btn-purple btn-fullwidth">Знайти</button>

            </div>
        </div>
    )
}