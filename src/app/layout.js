import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


export const metadata = {
  title: "Cash-U",
  description: "Маркетплейс обмінників",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <div className="wrapper">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
