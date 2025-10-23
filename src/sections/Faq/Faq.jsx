'use client';
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Faq.module.css";
import Heading from "@/components/Heading/Heading";
import Link from "next/link";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const FaqData = [
        {
            question: "Як користуватися картою обмінників?",
            answer: "Просто відкрийте карту на сайті або в застосунку, оберіть потрібну валюту й найближчий обмінник, перегляньте його курс і графік роботи та вирушайте за вказаним маршрутом."
        },
        {
            question: "Які валюти та мережі доступні?",
            answer: "Просто відкрийте карту на сайті або в застосунку, оберіть потрібну валюту й найближчий обмінник, перегляньте його курс і графік роботи та вирушайте за вказаним маршрутом."
        },
        {
            question: "Як стати партнером?",
            answer: "Просто відкрийте карту на сайті або в застосунку, оберіть потрібну валюту й найближчий обмінник, перегляньте його курс і графік роботи та вирушайте за вказаним маршрутом."
        },
    ];

  

    return (
        <section className={styles.faq} id="faq">
            <div className={styles.faqContainer}>
                <Heading title="Ваші питання — наші відповіді" imageSrc="/images/Question.svg" />
                <h4 className={styles.title} data-aos="fade-up">Більше інформації</h4>

                <div className={styles.wrap} data-aos="fade-up" data-aos-delay="100">
                    {FaqData.map((item, i) => {
                        const isOpen = openIndex === i;

                        return (
                            <div key={i} className={`${styles.item} ${isOpen ? styles.active : ''}`}>
                                <div className={styles.content}>
                                    <div
                                        className={styles.hero}
                                        onClick={() => handleToggle(i)}
                                    >
                                        <span className={styles.question}>{item.question}</span>
                                        <div className={`${styles.sign} ${isOpen ? styles.minus : null}`}>
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}>
                                        <div className={styles.answerContent}>
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.bottomText}>
                    Залишились питання?
                    {" "}
                    <Link href="#" >
                        Зв’яжіться з нами
                    </Link>
                </div>
            </div>

            <div className={styles.meteor}></div>
            <div className={styles.faqBlur}></div>
        </section>
    );
}
