// layout.jsx
import localFont from "next/font/local";
import "./globals.css";
import { productsData } from "../data/product.js"
import Header from "../components/Header/Header.jsx"
import styles from "./globals.css"

const cormorantGaramond = localFont({
    src: [
        {
            path: "../../public/fonts/CormorantGaramond-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/CormorantGaramond-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-cormorant",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={cormorantGaramond.variable}>
            <body className={cormorantGaramond.className}>
                <main className={styles.container}>
                    <Header title={"🛒 Loja de Eletrônicos"} subtitle={"Os melhores produtos estão aqui!"} totalProducts={productsData.length} />
                    {children}
                </main>
            </body>
        </html>
    );
}
