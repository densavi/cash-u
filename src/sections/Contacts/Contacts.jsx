import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Contacts.module.css';
import Heading from "@/components/Heading/Heading";
import Link from "next/link";

export default function Contacts() {
    return (
        <section className={styles.contacts}>
            <Heading title="Потрібна допомога?" imageSrc="/images/Question.svg" />
            <h3 className="title mb16" data-aos="fade-up">Залишились питання?</h3>
            <p className={`${styles.description} description`} data-aos="fade-up" data-aos-delay="100">
                Звертайтесь до нашої підтримки – наші фахівці дадуть відповіді на всі ваші питання
            </p>
            <Link href="#" className="btn btn-purple btn-lg" data-aos="fade-up" data-aos-delay="200">
                Зв’яжіться з нами
            </Link>
        </section>
    )
}