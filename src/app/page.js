import MarketplaceExchangers from "@/sections/MarketplaceExchangers/MarketplaceExchangers";
import ForClients from "@/sections/ForClients/ForClients";
import ForPartners from "@/sections/ForPartners/ForPartners";
import Faq from "@/sections/Faq/Faq";

export default function Home() {

    const ClientsData = {
        headingIcon: '/images/ShieldCheck.svg',
        headingText: 'Надійний захист / Швидкі транзакції / 125+ Партнерів',
        title: 'Клієнтам',
        list: [
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
        ],
        buttonText: 'Зареєструватися',
        buttonLink: '#',
        background: '/images/for-clients-bg.png',
    }

    return (
        <>
            <MarketplaceExchangers />
            <ForClients sectionData={ClientsData}/>
            <ForPartners/>
            <div className="footer-bg">
                <img className="footer-bg__image" src="/images/footer-bg.png" alt=""/>
                <Faq/>
            </div>
        </>
    );
}
