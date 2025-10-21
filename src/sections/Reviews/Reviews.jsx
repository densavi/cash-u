'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Masonry from "react-masonry-css";
import { useRef, useCallback, useEffect } from "react";

import styles from './Reviews.module.css';
import StarRating from "@/components/StarRating";

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    540: 1,
};

export default function Reviews() {
    const wrapperRef = useRef(null);

    const handleWheel = useCallback((e) => {
        const el = wrapperRef.current;
        if (!el) return;

        const atTop = el.scrollTop <= 0;
        const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
        const scrollingDown = e.deltaY > 0;
        const scrollingUp = e.deltaY < 0;

        const canScrollInside = (scrollingDown && !atBottom) || (scrollingUp && !atTop);
        if (canScrollInside) {
            e.preventDefault();
            e.stopPropagation();
            
            // Проверяем, мобильное ли устройство
            const isMobile = window.innerWidth <= 768;
            
            if (isMobile) {
                // Медленный скролл для мобильных устройств
                el.scrollTop += e.deltaY * 0.2;
            } else {
                // Быстрый скролл для десктопа (как было изначально)
                el.scrollTop += e.deltaY;
            }
        }
        // If cannot scroll inside (reached edge), do not preventDefault -> event bubbles to page (Lenis)
    }, []);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        let touchStartY = 0;

        const onWheel = (e) => handleWheel(e);

        const onTouchStart = (e) => {
            if (e.touches && e.touches.length > 0) {
                touchStartY = e.touches[0].clientY;
            }
        };

        const onTouchMove = (e) => {
            if (!(e.touches && e.touches.length > 0)) return;
            const currentY = e.touches[0].clientY;
            const deltaY = touchStartY - currentY; // positive when swiping up (scroll down)
            
            const atTop = el.scrollTop <= 0;
            const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
            const scrollingDown = deltaY > 0;
            const scrollingUp = deltaY < 0;
            const canScrollInside = (scrollingDown && !atBottom) || (scrollingUp && !atTop);

            if (canScrollInside) {
                e.preventDefault();
                e.stopPropagation();
                
                // Медленный скролл для мобильных устройств
                el.scrollTop += deltaY * 0.15;
            }
            // else let it bubble to page (Lenis)
        };

        el.addEventListener('wheel', onWheel, { passive: false });
        el.addEventListener('touchstart', onTouchStart, { passive: true });
        el.addEventListener('touchmove', onTouchMove, { passive: false });

        return () => {
            el.removeEventListener('wheel', onWheel);
            el.removeEventListener('touchstart', onTouchStart);
            el.removeEventListener('touchmove', onTouchMove);
        };
    }, [handleWheel]);

    const ReviewsList = [
        {
            text: 'Вже кілька разів обмінював валюту через цю платформу і завжди залишався задоволений. Курс вигідний, підтримка відповідає дуже швидко, а головне — відчуваєш безпеку при кожній операції. Чудовий сервіс!',
            name: 'Дмитро Б.',
            photo: '',
            rating: 4.5,
        },
        {
            text: 'Транзакція зайняла буквально кілька хвилин. Це найшвидший сервіс, з яким я працював. Дуже зручно для бізнесу.',
            name: 'Дмитро Б.',
            photo: '/images/61.jpg',
            rating: 4,
        },
        {
            text: 'Все пройшло швидко та без проблем. Дуже зручно, що можна відстежувати курс у реальному часі. Рекомендую!',
            name: 'Вадим К.',
            photo: '',
            rating: 4.5,
        },
        {
            text: 'Вперше скористався платформою за порадою друга і залишився дуже задоволений. Інтерфейс простий, навіть для новачка. Я обрав суму, натиснув кілька кнопок — і все! Гроші прийшли швидше, ніж я очікував. Досвід виявився настільки приємним, що тепер користуюсь регулярно. ',
            name: 'Олександр М.',
            photo: '',
            rating: 3,
        },
        {
            text: 'Інтерфейс простий і зрозумілий. Все можна зробити в декілька кліків. Навіть новачок розбереться!',
            name: 'Ірина С.',
            photo: '',
            rating: 5,
        },
        {
            text: 'Вже кілька разів обмінював валюту через цю платформу і завжди залишався задоволений. Курс вигідний, підтримка відповідає дуже швидко, а головне — відчуваєш безпеку при кожній операції. Чудовий сервіс!',
            name: 'Дмитро Б.',
            photo: '',
            rating: 4.5,
        },
        {
            text: 'Транзакція зайняла буквально кілька хвилин. Це найшвидший сервіс, з яким я працював. Дуже зручно для бізнесу.',
            name: 'Дмитро Б.',
            photo: '',
            rating: 4,
        },
        {
            text: 'Все пройшло швидко та без проблем. Дуже зручно, що можна відстежувати курс у реальному часі. Рекомендую!',
            name: 'Вадим К.',
            photo: '',
            rating: 4.5,
        },
        {
            text: 'Вперше скористався платформою за порадою друга і залишився дуже задоволений. Інтерфейс простий, навіть для новачка. Я обрав суму, натиснув кілька кнопок — і все! Гроші прийшли швидше, ніж я очікував. Досвід виявився настільки приємним, що тепер користуюсь регулярно. ',
            name: 'Олександр М.',
            photo: '',
            rating: 3,
        },
        {
            text: 'Інтерфейс простий і зрозумілий. Все можна зробити в декілька кліків. Навіть новачок розбереться!',
            name: 'Ірина С.',
            photo: '',
            rating: 5,
        },
        {
            text: 'Вже кілька разів обмінював валюту через цю платформу і завжди залишався задоволений. Курс вигідний, підтримка відповідає дуже швидко, а головне — відчуваєш безпеку при кожній операції. Чудовий сервіс!',
            name: 'Дмитро Б.',
            photo: '',
            rating: 4.5,
        },
        {
            text: 'Транзакція зайняла буквально кілька хвилин. Це найшвидший сервіс, з яким я працював. Дуже зручно для бізнесу.',
            name: 'Дмитро Б.',
            photo: '/images/61.jpg',
            rating: 4,
        },
        {
            text: 'Все пройшло швидко та без проблем. Дуже зручно, що можна відстежувати курс у реальному часі. Рекомендую!',
            name: 'Вадим К.',
            photo: '',
            rating: 4.5,
        },
        {
            text: 'Вперше скористався платформою за порадою друга і залишився дуже задоволений. Інтерфейс простий, навіть для новачка. Я обрав суму, натиснув кілька кнопок — і все! Гроші прийшли швидше, ніж я очікував. Досвід виявився настільки приємним, що тепер користуюсь регулярно. ',
            name: 'Олександр М.',
            photo: '',
            rating: 3,
        },
        {
            text: 'Інтерфейс простий і зрозумілий. Все можна зробити в декілька кліків. Навіть новачок розбереться!',
            name: 'Ірина С.',
            photo: '',
            rating: 5,
        },
        {
            text: 'Вже кілька разів обмінював валюту через цю платформу і завжди залишався задоволений. Курс вигідний, підтримка відповідає дуже швидко, а головне — відчуваєш безпеку при кожній операції. Чудовий сервіс!',
            name: 'Дмитро Б.',
            photo: '',
            rating: 4.5,
        },
        {
            text: 'Транзакція зайняла буквально кілька хвилин. Це найшвидший сервіс, з яким я працював. Дуже зручно для бізнесу.',
            name: 'Дмитро Б.',
            photo: '',
            rating: 4,
        },
        {
            text: 'Все пройшло швидко та без проблем. Дуже зручно, що можна відстежувати курс у реальному часі. Рекомендую!',
            name: 'Вадим К.',
            photo: '',
            rating: 4.5,
        },
        {
            text: 'Вперше скористався платформою за порадою друга і залишився дуже задоволений. Інтерфейс простий, навіть для новачка. Я обрав суму, натиснув кілька кнопок — і все! Гроші прийшли швидше, ніж я очікував. Досвід виявився настільки приємним, що тепер користуюсь регулярно. ',
            name: 'Олександр М.',
            photo: '',
            rating: 3,
        },
        {
            text: 'Інтерфейс простий і зрозумілий. Все можна зробити в декілька кліків. Навіть новачок розбереться!',
            name: 'Ірина С.',
            photo: '',
            rating: 5,
        },

    ]

    return (
        <section className={styles.reviews}>
            <div className="container">
                <h4 className={`${styles.title} title`} data-aos="fade-up">Що кажуть наші клієнти</h4>
                <div className={styles.shadow}>
                    <div className={styles.wrapper} ref={wrapperRef} data-aos="fade-up" data-aos-delay="100">
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className={styles.masonryGrid}
                            columnClassName={styles.masonryGridColumn}
                        >
                            {ReviewsList.map((item, index) => (
                                <div key={index} className={styles.item}>
                                    <div className={styles.text}>{item.text}</div>
                                    <div className={styles.reviewInfo}>
                                        <div className={styles.photo}>
                                            {item.photo && (
                                                <img src={item.photo} alt={item.name}/>
                                            )}
                                        </div>
                                        <div>
                                            <p className={styles.name}>
                                                {item.name}
                                            </p>
                                            <div className={styles.rating}>
                                                <StarRating rating={item.rating} ratingId={`rating-${item.rating}`}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Masonry>
                    </div>
                </div>
            </div>
        </section>
    )
}