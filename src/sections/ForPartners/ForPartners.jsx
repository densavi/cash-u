'use client';
import { useEffect, useRef } from 'react';

import styles from "./ForPartners.module.css";
import Heading from "@/components/Heading/Heading";
import Link from "next/link";
import Image from "next/image";


export default function ForPartners() {


    const meteorRef = useRef(null);
    const lastPosition = useRef({ meteorX: 0, meteorY: 0 });
    const scrollPosition = useRef({ meteorScrollY: 0 });

    useEffect(() => {
        const updateTransforms = () => {
            const meteorRotate = lastPosition.current.meteorX / 4;

            if (meteorRef.current) {
                meteorRef.current.style.transform = `translate(${lastPosition.current.meteorX}px, ${lastPosition.current.meteorY + scrollPosition.current.meteorScrollY}px) rotate(${meteorRotate}deg)`;
            }
        };

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const maxOffset = 5;
            let meteorOffsetX = ((clientX - centerX) / centerX) * maxOffset;
            let meteorOffsetY = ((clientY - centerY) / centerY) * maxOffset;

            meteorOffsetX = Math.max(meteorOffsetX, 0);

            const damping = 0.05;
            lastPosition.current.meteorX += (meteorOffsetX - lastPosition.current.meteorX) * damping;
            lastPosition.current.meteorY += (meteorOffsetY - lastPosition.current.meteorY) * damping;

            lastPosition.current.meteorX = Number(lastPosition.current.meteorX.toFixed(2));
            lastPosition.current.meteorY = Number(lastPosition.current.meteorY.toFixed(2));

            updateTransforms();
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
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
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.sectionInfo}>
                        <Heading
                            title="Розвиток бізнесу / База нових клієнтів  / Автоматизація процесів"
                            imageSrc="/images/Lightning.svg"
                            className={styles.headingAlign}
                        />
                        <h3 className={`${styles.title}`}>Партнерам</h3>
                    </div>
                    <div className={styles.list} >
                        {ForPartnersList.map((item, i) => (
                            <div
                                key={i}
                                className={styles.item}

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
            <div ref={meteorRef} className={styles.meteor}></div>
        </section>
    )
}