import { FC, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import styles from "./Product.module.css"
import MyButton from "../../../components/myButton/MyButton"
import IProduct from "../types/Product"
import { useAppSelector } from "../../../app/hooks"

const Product: FC = () => {
  const { id } = useParams()

  const initialValue: IProduct = {
    id: 0,
    title: "",
    price: 0,
    category: "",
    description: "",
    image: "",
    rating: {
      rate: 1,
      count: 0,
    },
  }


  const [product, setProduct] = useState<IProduct>(initialValue)

  useEffect(() => {
    async function loadProduct() {
      const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await resp.json()

      setProduct(data)
    }

    loadProduct()
  }, [id])

  return (
    <div>
      <Link to={"/products"}>
        <MyButton text="Return to products" />
      </Link>
      <h1>{product.title}</h1>

      <p>{product.description}</p>
      <div className={styles.imgWrapper}>
        <img src={product.image} alt="" />
      </div>
    </div>
  )
}

export default Product
