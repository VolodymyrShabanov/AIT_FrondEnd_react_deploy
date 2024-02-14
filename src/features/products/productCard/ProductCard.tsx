import { FC } from "react"

import styles from "./ProductCard.module.css"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../app/hooks"
import MyButton from "../../../components/myButton/MyButton"
import { deleteProduct } from "../productAction"
import IProduct from "../types/Product"

const ProductCard: FC<IProduct> = ({ id, title, description, image }) => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <li key={id} className={styles.productCard}>
        <span className={styles.title}>{title}</span>

        <div className={styles.imgWrapper}>
          <img src={image} alt="" />
        </div>
        <Link to={String(id)}>
          <MyButton text="to products page" />
        </Link>

        <MyButton text="Delete" onClick={() => dispatch(deleteProduct(id))} />
      </li>
    </div>
  )
}

export default ProductCard
