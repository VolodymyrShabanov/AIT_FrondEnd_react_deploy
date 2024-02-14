import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import Products from "./features/products/Products"
import Memes from "./features/memes/Memes"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import CityToggle from "./components/cityToggle/CityToggle"
import Sandwich from "./components/sandwich/Sandwich"

import DogCard from "./components/dogCard/DogCard"
import CatCard from "./components/catCard/CatCard"

import Parent from "./components/parent/Parent"
import Error from "./components/error/Error"
import ProductPage from "./features/products/productPage/ProductPage"
import Product from "./features/products/product/Product"
import UsersPage from "./features/users/userPage/UsersPage"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="AIT_FrondEnd_react_deploy" element={<Layout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/:id" element={<Product />} />

          <Route path="users-page" element={<UsersPage />} />
          {/* <Route path="users-page/:id" element={<User />} /> */}

          <Route path="dog-card" element={<DogCard />} />
          <Route path="city-toggle" element={<CityToggle />} />
          <Route path="sandwich" element={<Sandwich />} />
          <Route path="cat-card" element={<CatCard />} />
          <Route path="flower-card" element={<Parent />} />

          <Route path="memes" element={<Memes />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>

    {/* <App /> */}
    {/* <Products/> */}
    {/* <Memes/> */}
  </Provider>,
)
