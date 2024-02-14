import React, { FC, useEffect, useState } from "react"
import styles from "./ProductPage.module.css"

import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { loadProducts } from "../productAction"
import ProductForm from "../productForm/ProductForm"
import ProductCard from "../productCard/ProductCard"
import Loader from "../../../components/loader/Loader"

const ProductPage: FC = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   async function GetProducts() {
  //       const resp = await fetch("https://fakestoreapi.com/products");
  //       const respObj = await resp.json();
  //       setProducts(respObj);
  //     }

  //     GetProducts();
  //   }, []);

  const dispatch = useAppDispatch()

  const { products, error, isLoading } = useAppSelector(
    (state) => state.products,
  )

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  return (
    <div>
      <ProductForm />
      {isLoading && <Loader />}
      {error && <h4 style={{ color: "red" }}>Error {error}</h4>}
      {!isLoading && (
        <ul className={styles.productList}>
          {products.map((el) => (
            <ProductCard
              key={el.id}
              id={el.id}
              title={el.title}
              description={el.description}
              image={el.image}
            />

            // <div>
            //   <li key={el.id} className={styles.productCard}>
            //     <span className={styles.title}>{el.title}</span>

            //     <div className={styles.imgWrapper}>
            //       <img src={el.image} alt="" />
            //     </div>
            //       <Link to={String(el.id)}>
            //     <MyButton text="to product" />
            //       </Link>
            //   </li>
            // </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductPage
