import { FC } from "react"

import styles from "./ProductCard.module.css"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import MyButton from "../../../components/myButton/MyButton"
import { deleteProduct } from "../productAction"
import IProduct from "../types/Product"
import { toggleFavorites } from "../productsSlice"

const ProductCard: FC<IProduct> = ({ id, title, description, image, price }) => {
  const dispatch = useAppDispatch()

  const {favorites} = useAppSelector(
    (state) =>   state.products
  )

  return (
    <div>
      <li key={id} className={styles.productCard}>
        <span className={styles.title}>{title}</span>

        <div className={styles.imgWrapper}>
          <img src={image} alt="" />
        </div>
        <span style={{color: "green", fontSize: 40}}>Price: {price} €</span>

        <svg style={{ cursor: 'pointer' }} onClick={() => dispatch(toggleFavorites(id))} width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" version="1.1" fill={favorites.includes(id as number) ? "#e74c3c" : 'grey'} >
              <g transform="translate(0 -1028.4)">
                {/* по свойству fill меняем цвет заливки, в зависимости от наличия id в массиве любимых продуктов */}
                <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"  />
              </g>
            </svg>

            {/* fill={favorites.includes(el.id as number) ? "#e74c3c" : 'grey'} */}


        <Link to={String(id)}>
          <MyButton text="to products page" />
        </Link>

        <MyButton text="Delete" onClick={() => dispatch(deleteProduct(id))} />
      </li>
    </div>
  )
}

export default ProductCard
