import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import Products from "./features/products/Products"
import Memes from "./features/memes/Memes"
import { HashRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Sandwich from "./components/sandwich/Sandwich"

import DogCard from "./components/dogCard/DogCard"
import CatCard from "./components/catCard/CatCard"

import Parent from "./components/parent/Parent"
import Error from "./components/error/Error"
import ProductPage from "./features/products/productPage/ProductPage"
import Product from "./features/products/product/Product"
import UsersPage from "./features/users/userPage/UsersPage"
import Shop from "./components/shop/Shop"
import CityPage from "./components/cityPage/CityPage"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop/>} />
          <Route path="products" element={<ProductPage />} />
          
          <Route path="products/:id" element={<Product />} />

          <Route path="users-page" element={<UsersPage />} />
          {/* <Route path="users-page/:id" element={<User />} /> */}

          <Route path="dog-card" element={<DogCard />} />
          <Route path="city-page" element={<CityPage /> } />
          <Route path="sandwich" element={<Sandwich />} />
          <Route path="cat-card" element={<CatCard />} />
          <Route path="flower-card" element={<Parent />} />

          <Route path="memes" element={<Memes />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>

    {/* <App /> */}
    {/* <Products/> */}
    {/* <Memes/> */}
  </Provider>,
)
