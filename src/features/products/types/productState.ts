import IProduct from "./Product"

export default interface productState {
  products: IProduct[]
  isLoading?: boolean,
  error?: null | string
}
