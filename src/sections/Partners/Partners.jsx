import styles from './Partners.module.css';
import Heading from "@/components/Heading/Heading";
import Link from "next/link";

export default function Partners() {
    return (
        <section className={styles.partners}>
            <div className="container">
                <div className={styles.wrap}>
                    <div className={styles.content}>
                        <div className={styles.container}>
                            <Heading title="CASH-U – це інноваційна платформа"  imageSrc="/images/Handshake.svg" />
                            <h4 className="title mb16">Станьте партнерами</h4>
                            <p className={`description ${styles.description}`}>
                                Керуйте вашим бізнесом ефективно за допомогою нашого сервісу та залучайте клієнтів з нашої бази
                            </p>
                            <Link href="/" className="btn btn-purple btn-lg">
                                Стати партнером
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}