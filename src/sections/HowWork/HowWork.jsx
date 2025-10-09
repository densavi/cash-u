import styles from './HowWork.module.css';
import Heading from "@/components/Heading/Heading";
import Link from "next/link";

export default function HowWork() {

    const HowWorkData = [
        {
            title: "Подайте заявку",
            description: "Заповніть форму вказавши інформацію про вашу обмінну мережу та підтримувані активи"
        },
        {
            title: "Інтеграція та налаштування",
            description: "Після схвалення отримайте доступ до нашої панелі управління для налаштування курсів,касирів та замовлень"
        },
        {
            title: "Залучайте клієнтів",
            description: "Використовуйте нашу клієнтську базу та автоматизовані інструменти для зростання вашого бізнесу"
        },
    ]

    return (
        <section className={styles.howWork}>
            <div className="container">
                <Heading imageSrc="/images/PuzzlePiece.svg" title="CASH-U – це інноваційна платформа"/>
                <h4 className={`${styles.title} title`}>Як працює наш маркетплейс?</h4>
            </div>
            <div className={styles.container}>

                <div className={styles.list}>
                    <div className={styles.diagram}>
                        <div><span>01</span></div>
                        <div><span>02</span></div>
                        <div><span>03</span></div>
                    </div>
                    {HowWorkData.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.content}>
                                <h5 className={styles.heading}>{ item.title }</h5>
                                <p className={styles.description}>{ item.description }</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className={styles.button}>
                    <Link href="#" className="btn btn-purple btn-lg">
                        Стати партнером
                    </Link>
                </div>
            </div>
        </section>
    )
}