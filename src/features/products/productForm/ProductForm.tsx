import React, { FC, FormEvent, useState } from "react"
import style from "./Product.module.css"
import { useAppDispatch } from "../../../app/hooks"
import { addProduct } from "../productAction"
import IProductCredentials from "../types/ProductCredentials"

const ProductForm: FC = () => {
  function validateInputs(): boolean {
    const linkPattern = /^(https?:\/\/)?([\w.-]+\.\w{2,})(\/\S*)?$/
    if (title.trim() === "") {
      setError("title is not valid")
      return false
    }
    if (description.trim() === "") {
      setError("description is not valid")
      return false
    }
    if (category.trim() === "") {
      setError("category is not valid")
      return false
    }
    if (price.trim() === "" || Number.isNaN(Number(price))) {
      setError("price is not valid")
      return false
    }
    if (!linkPattern.test(image)) {
      setError("url is not valid")
      return false
    }
    return true
  }

  const dispatch = useAppDispatch()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: IProductCredentials = {
      title,
      description,
      category,
      price: Number(price),
      image,
    }

    // if (validateInputs()) {
      dispatch(addProduct(data))
    // }

    // console.log(data);
  }

  return (
    <div className={style.formContainer}>
      {/* <h1>Product Form</h1> */}
      <form className={style.form} onSubmit={handleSubmit} action="">
        <label>Add new product</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          type="text"
          value={title}
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          type="text"
          value={description}
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          placeholder="category"
          type="text"
          value={category}
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
          type="text"
          value={price}
        />
        <input
          onChange={(e) => setImage(e.target.value)}
          placeholder="image"
          type="text"
          value={image}
        />
        <button type="submit" className="button">
          Add file
        </button>
      </form>
    </div>
  )
}

export default ProductForm

function setError(arg0: string) {
  throw new Error("Function not implemented.")
}
