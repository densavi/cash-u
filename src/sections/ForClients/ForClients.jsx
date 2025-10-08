import styles from "./ForClients.module.css";
import Heading from "@/components/Heading/Heading";

import Link from "next/link";
import Image from "next/image";

export default function ForClients() {

    const ForClientsItems = [
        {
            icon: '/images/for-clients-1.png',
            title: 'Легкий доступ до обмінних мереж',
            description: 'Обирайте зручні обмінні мережі та пункти видачі готівки в один клік'
        },
        {
            icon: '/images/for-clients-2.png',
            title: 'Швидкі та надійні транзакції',
            description: 'Обмінюйте криптовалюту та фіат миттєво з гарантією безпеки'
        },
        {
            icon: '/images/for-clients-3.png',
            title: 'Зручний пошук по локаціям',
            description: 'Керуйте обмінами з доступом до ваших улюблених мереж'
        },
        {
            icon: '/images/for-clients-4.png',
            title: 'Реальні курси в реальному часі',
            description: 'Керуйте обмінами з доступом до ваших улюблених мереж'
        },
    ]

    return (
        <section className={styles.forClients}>
            <div className="container">
                <Heading imageSrc="images/ShieldCheck.svg"
                         title="Надійний захист / Швидкі транзакції / 125+ Партнерів"/>
                <h3 className={`${styles.title} text-gradient-1`}>
                    Клієнтам
                </h3>

                <div className={styles.wrap}>
                    {ForClientsItems.map((item, i) => (
                        <div key={i} className={styles.item}>
                            <div className={styles.content}>
                                <div className={styles.icon}>
                                    <Image src={item.icon} alt={item.title} width="60" height="60" />
                                </div>
                                <h3 className={styles.heading}>
                                    {item.title}
                                </h3>
                                <p className={styles.description}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.button}>
                    <Link href="#" className="btn btn-purple btn-lg">
                        Зареєструватися
                    </Link>
                </div>

            </div>
            <img className={styles.bg} src="/images/for-clients-bg.png" alt=""/>
        </section>
    )
}