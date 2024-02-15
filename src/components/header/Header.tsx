import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadProducts } from "../../features/products/productAction";

const Header: FC = () => {

  const {products, favorites} =useAppSelector(state => state.products)

  const dispatch =useAppDispatch();
  useEffect(() => {
    dispatch(loadProducts())
  }, [])
  return (
    <>
    <div className={styles.navbar}>
      <div className={styles.links}>
      <NavLink to="/">Home page</NavLink>

      <NavLink to="products">Products</NavLink>
      
      <NavLink to="users-page">Users page</NavLink>

      <NavLink to="memes">Memes</NavLink>
      <NavLink to="dog-card">Dog Card</NavLink>
      <NavLink to="city-page">City Page</NavLink>
      <NavLink to="sandwich">Sandwich</NavLink>
      <NavLink to="cat-card">Cat Card</NavLink>
      <NavLink to="flower-card">Flower Card</NavLink>
      </div>
      
      <div className={styles.inform}>
        <span>Сейчас в магазине <span style={{ color: "rgb(0, 255, 136)", fontSize: "20px" , width: "bold"}}>{products.length}</span> товаров</span>
        <span>My favorites: <span style={{color: "rgb(0, 255, 136)", fontSize: "20px"}}> {favorites.length} </span> products</span>
      </div>

      </div>  
    </>
  );
};

export default Header;
