import Link from "next/link";
import styles from "./not-found.module.css"

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>🔍 404 - Página não encontrada</h1>
            <p className={styles.subtitle}>A página que você procura não existe.</p>
            
            <div className={styles.linkDiv}>
                <Link href="/" className={styles.link}>🏠 Voltar para Home</Link>
            </div>
        </div>
    )
}