import React, { FC } from "react"
import styles from "./ShopCard.module.css"

interface IShopProps {
  id?: number
  title?: string
  description?: string
  price?: number
  discountPercentage?: number
  rating?: number
  stock?: number
  brand?: string
  category?: string
  thumbnail?: string
  images?: string[]
}

const ShopCard: FC<IShopProps> = ({ id, category, description, images }) => {
  return (
    <div>
      <div className={styles.card}>
        <h4>{category}</h4>
        <p>{description}</p>

        <div className={styles.imagesBox}>
          {images?.map((image) => (
            <div className={styles.imageWrapper}>
              <img className={styles.image} src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopCard
