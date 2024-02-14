import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadProducts } from "../../features/products/productAction";

const Header: FC = () => {

  const {products} =useAppSelector(state => state.products)
  const dispatch =useAppDispatch();
  useEffect(() => {
    dispatch(loadProducts())
  }, [])
  return (
    <div className={styles.navbar}>
      <NavLink to="AIT_FrondEnd_react_deploy">Home page</NavLink>

      <NavLink to="products">Products</NavLink>
      
      <NavLink to="users-page">Users page</NavLink>

      <NavLink to="memes">Memes</NavLink>
      <NavLink to="dog-card">Dog Card</NavLink>
      <NavLink to="city-toggle">Toggle City</NavLink>
      <NavLink to="sandwich">Sandwich</NavLink>
      <NavLink to="cat-card">Cat Card</NavLink>
      <NavLink to="flower-card">Flower Card</NavLink>
      <span>Сейчас в магазине <span style={{ color: "blue", fontSize: "20px" , width: "bold"}}>{products.length}</span> товаров</span>
    </div>
  );
};

export default Header;
