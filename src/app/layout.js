import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import LenisProvider from "@/hooks/LenisProvider";

export const metadata = {
    title: "Cash-U",
    description: "Маркетплейс обмінників",
};

export default function RootLayout({ children }) {



    return (
        <html lang="en">
            <body>
                <LenisProvider lerp={0.08} wheelMultiplier={0.6}>
                    <Header />
                        <div className="wrapper">
                            {children}
                        </div>
                        <Footer />
                </LenisProvider>
            </body>
        </html>
    );
}
