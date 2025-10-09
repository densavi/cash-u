import HeroSection from "@/sections/HeroSection/HeroSection";
import Contacts from "@/sections/Contacts/Contacts";
import ForClients from "@/sections/ForClients/ForClients";
import Partners from "@/sections/Partners/Partners";
import HowWork from "@/sections/HowWork/HowWork";

export const metadata = {
    title: "Приєднуйтесь до маркетплейсу обмінних мереж",
};

export default function JoinMarketplace() {

    const BenefitsData = {
        headingIcon: '/images/ShieldCheck.svg',
        headingText: 'Надійність / База клієнтів / Автоматизація бізнесу',
        title: 'Наші переваги',
        list: [
            {
                title: 'Доступ до клієнтів',
                description: 'Використовуйте нашу клієнтську базу для збільшення обсягу транзакцій'
            },
            {
                title: 'Управління операціями',
                description: 'Керуйте касирами, курсами, замовленнями та налаштуваннями через єдиний інтерфейс'
            },
            {
                title: 'Безпека та довіра',
                description: 'Перевірені транзакції та надійна репутація маркетплейсу для розвитку вашого бізнесу.'
            },
            {
                title: 'Автоматизація процесів',
                description: 'Автоматизований парсинг курсів та обробка замовлень для підвищення ефективності.'
            },
        ],
    }

    return (
        <>
            <HeroSection />
            <ForClients sectionData={BenefitsData} />
            <Partners />
            <HowWork />
            <Contacts />
        </>
    );
}
