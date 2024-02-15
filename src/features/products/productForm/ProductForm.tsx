import React, { ChangeEvent, FC, FormEvent, useState } from "react"
import style from "./Product.module.css"
import { useAppDispatch } from "../../../app/hooks"
import { addProduct } from "../productAction"
import IProductCredentials from "../types/ProductCredentials"
import IProduct from "../types/Product"
import useLocalStorage from "../../../hooks/useLS"

const ProductForm: FC = () => {
  // const [title, setTitle] = useState("")
  // const [description, setDescription] = useState("")
  // const [category, setCategory] = useState("")
  // const [price, setPrice] = useState("")
  // const [image, setImage] = useState("")

  const dispatch = useAppDispatch();
  const [error, setError] = useState('');
  
  const [product, setProduct] = useLocalStorage("product",{
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setProduct({
      ...product,
      [name]: value,
    })
  }

  function validateInputs(): boolean {
    const linkPattern = /^(https?:\/\/)?([\w.-]+\.\w{2,})(\/\S*)?$/

    if (product.title.trim() === "") {
      setError("title is not valid")
      return false
    }
    if (product.description.trim() === "") {
      setError("description is not valid")
      return false
    }
    if (product.category.trim() === "") {
      setError("category is not valid")
      return false
    }
    if (product.price.trim() === "" || Number.isNaN(Number(product.price))) {
      setError("price is not valid")
      return false
    }
    if (!linkPattern.test(product.image)) {
      setError("url is not valid")
      return false
    }
    return true
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('');

    sessionStorage.setItem("price", product.price)

    console.log(product)

    // const data: IProductCredentials = {
    //   title,
    //   description,
    //   category,
    //   price: Number(price),
    //   image,
    // }

    if (validateInputs()) {
    dispatch(addProduct(product))
    }

    // console.log(data);
  }

  return (
    <>
    
    <div className={style.formContainer}>
      {/* <h1>Product Form</h1> */}
      <form className={style.form} onSubmit={handleSubmit} action="">
        <label>Add new product</label>
        <input
          name="title"
          onChange={handleChange}
          placeholder="title"
          type="text"
          value={product.title}
        />
        <input
          name="description"
          onChange={handleChange}
          placeholder="description"
          type="text"
          value={product.description}
        />
        <input
          name="category"
          onChange={handleChange}
          placeholder="category"
          type="text"
          value={product.category}
        />
        <input
          name="price"
          onChange={handleChange}
          placeholder="price"
          type="text"
          value={product.price}
        />
        <input
          name="image"
          onChange={handleChange}
          placeholder="image"
          type="text"
          value={product.image}
        />
        <button type="submit" className="button">
          Add file
        </button>
      </form>
    </div>
    <div style={{textAlign: 'center'}}>
        {error && <span style={{color: 'red'}}>{error}</span>}
    </div>
    </>
  )
}

export default ProductForm

function setError(arg0: string) {
  throw new Error("Function not implemented.")
}
