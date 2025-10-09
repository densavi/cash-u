import HeroSection from "@/sections/HeroSection/HeroSection";
import Contacts from "@/sections/Contacts/Contacts";

export const metadata = {
    title: "Приєднуйтесь до маркетплейсу обмінних мереж",
};

export default function JoinMarketplace() {
    return (
        <>
            <HeroSection />
            <Contacts />
        </>
    );
}
