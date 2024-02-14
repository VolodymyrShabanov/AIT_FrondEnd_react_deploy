import React, { FC, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deleteProduct, loadProducts } from "./productAction"
import MyButton from "../../components/myButton/MyButton"

const Products: FC = () => {
  const dispatch = useAppDispatch()

  const { products, error, isLoading } = useAppSelector(
    (state) => state.products,
  )

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  const updateState = () => {
    dispatch(loadProducts())
  }

  const removeProduct = (id: number): void => {
    dispatch(deleteProduct(id))
  }

  return (
    <div>
      <h1>Products new working</h1>
      <MyButton text="update state" onClick={updateState} />
      {isLoading && <h4>Loading...</h4>}
      {error && <h4 style={{ color: "red" }}> Error {error} </h4>}
      <div>
        {products.map((el) => (
          <div key={el.id}>
            <button onClick={() => removeProduct(el.id)}>Delete</button>
            <span style={{ whiteSpace: "pre-line" }}> {el.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
