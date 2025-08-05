import styles from "./ProductCard.module.css"

export default function ProductCard({image, title, price, description, score, reviews}) {
    return (
        <div className={styles.productCard} data-category="smartphones">
            <div className={styles.productImage}>
                <img src={image} className={styles.image}/>
            </div>
            <div className={styles.productTitle}>{title}</div>
            <div className={styles.productPrice}>{price}</div>
            <div className={styles.productDescription}>{description}</div>
            <div className={styles.productRating}>
                <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span>({score}) - {reviews ? reviews + " avaliações" : "Não avaliado" }</span>
            </div>
        </div>

    )
}