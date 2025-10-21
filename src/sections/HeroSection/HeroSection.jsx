import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./HeroSection.module.css";

import Heading from "@/components/Heading/Heading";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <Heading title="Керуйте ефективно" imageSrc="/images/RocketLaunch.svg"/>
            <h1 className={`title ${styles.title}`} data-aos="fade-up">Приєднуйтесь до маркетплейсу
                обмінних мереж</h1>
            <p className={`description ${styles.description}`} data-aos="fade-up" data-aos-delay="100">
                Керуйте вашим бізнесом ефективно за допомогою нашого сервісу та залучайте клієнтів з нашої бази
            </p>
            <Link href="#" className="btn btn-purple btn-lg" data-aos="fade-up" data-aos-delay="200">
                Стати партнером
            </Link>
            <img className={styles.bg} src="/images/hero-bg.png" alt=""/>
        </section>
    )
}