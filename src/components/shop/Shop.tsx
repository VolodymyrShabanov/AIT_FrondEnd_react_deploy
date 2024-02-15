import React, { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { shopSlice } from "./shopSlice"
import { loadShop } from "./shopAction"
import Loader from "../loader/Loader"
import styles from "./Shop.module.css"
import ShopCard from "./shopCard/ShopCard"

const Shop: FC = () => {
  const dispatch = useAppDispatch()

  const { products, isLoading, error } = useAppSelector((state) => state.shop)

  useEffect(() => {
    dispatch(loadShop())
  }, [])

  return (
    <div>
      <h1>Shop</h1>

      {isLoading && <Loader />}

      {error && <h1 style={{ color: "red" }}>Error: {error}</h1>}

      {!isLoading && (
        <div className={styles.container}>
          {products.map((el) => (
            
            <ShopCard key={el.id} category={el.category} description={el.description} images={el.images}/>
            // <div className={styles.card} key={el.id}>
            //   <h4>{el.category}</h4>
            //   <p>{el.description}</p>
            //   <div className={styles.imagesBox}>
            //     {el.images.map((image) => (
            //       <img className={styles.image} src={image} alt="" />
            //     ))}
            //   </div>
            // </div>

          ))}
        </div>
      )}
    </div>
  )
}

export default Shop
