import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./ForClients.module.css";
import Heading from "@/components/Heading/Heading";

import Link from "next/link";

export default function ForClients({sectionData}) {

    return (
        <section className={styles.forClients}>
            <div className="container">
                <Heading imageSrc={sectionData.headingIcon}
                         title={sectionData.headingText} />
                <h3 className={`${styles.title}`} data-aos="fade-up">
                    {sectionData.title}
                </h3>

                <div className={styles.wrap}>
                    {sectionData.list.map((item, i) => (
                        <div key={i} className={styles.item} data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className={styles.content}>
                                {item.icon ? (
                                    <div className={styles.icon}>
                                        {/*<Image src={item.icon} alt={item.title} width="60" height="60" />*/}
                                        <img src={item.icon} alt=""  width="60" height="60" />
                                    </div>
                                ) : (
                                    <div className={`${styles.icon} ${styles.iconNumber}`}>
                                        {(i + 1).toString().padStart(2, '0')}
                                    </div>
                                )}

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

                {sectionData.buttonLink && (
                    <div className={styles.button} data-aos="fade-up" data-aos-delay="200">
                        <Link href={sectionData.buttonLink} className="btn btn-purple btn-lg">
                            {sectionData.buttonText}
                        </Link>
                    </div>
                )}

            </div>
        </section>
    )
}