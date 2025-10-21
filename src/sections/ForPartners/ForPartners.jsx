'use client';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./ForPartners.module.css";
import Heading from "@/components/Heading/Heading";
import Link from "next/link";
import Image from "next/image";


export default function ForPartners() {


    useEffect(() => {
        // Инициализация AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);



    const ForPartnersList = [
        {
            title: "Залучення клієнтів",
            description: "Отримуйте доступ до клієнтської бази Cash-и для зростання бізнесу",
            image: '/images/for-partners-1.png'
        },
        {
            title: "SaaS-панель керування",
            description: "Керуйте касами, курсами, касирами, замовленнями та обліком — швидко в одному місці",
            image: '/images/for-partners-2.png'
        },
        {
            title: "Автоматизація процесів",
            description: "Підвищте ефективність бізнесу —автоматизуйте обмін, парсинг курсів, та залучення клієнтів",
            image: '/images/for-partners-3.jpg'
        },
    ]


    return (
        <section className={styles.forPartners}>
            <div className={`${styles.container} container`}>
                <div className={styles.wrap}>
                    <div className={styles.sectionInfo}>
                        <Heading
                            title="Розвиток бізнесу / База нових клієнтів  / Автоматизація процесів"
                            imageSrc="/images/Lightning.svg"
                            className={styles.headingAlign}
                        />
                        <h3 className={`${styles.title}`} data-aos="fade-up">Партнерам</h3>
                    </div>
                    <div className={styles.list} >
                        {ForPartnersList.map((item, i) => (
                            <div
                                key={i}
                                className={styles.item}
                                data-aos="fade-up" data-aos-delay={i * 100}
                            >
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        <div className={`${styles.num}`}>{String(i + 1).padStart(2, '0')}</div>
                                        <div>
                                            <h4 className={`${styles.ttl}`}>{item.title}</h4>
                                            <p className={styles.description}>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className={styles.image}>
                                        <Image src={item.image} alt={item.title} width={260} height={220} />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className={styles.button}>
                            <Link href="#" className="btn btn-purple btn-fullwidth btn-lg">
                                Зареєструватися
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.meteor}></div>
            <div className={styles.forPartnersBlur}></div>
        </section>
    )
}