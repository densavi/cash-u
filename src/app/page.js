// import Image from "next/image";
import MarketplaceExchangers from "@/sections/MarketplaceExchangers/MarketplaceExchangers";
import ForClients from "@/sections/ForClients/ForClients";
import ForPartners from "@/sections/ForPartners/ForPartners";
import Faq from "@/sections/Faq/Faq";

export default function Home() {
  return (
    <>
      <MarketplaceExchangers />
      <ForClients />
      <ForPartners />
      <Faq />
    </>
  );
}
