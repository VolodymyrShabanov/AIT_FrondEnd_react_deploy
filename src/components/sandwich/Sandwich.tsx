import { FC, useState } from "react";

import style from "./Sandwich.module.css";
import { motion } from "framer-motion";



const Sandwich: FC = () => {
  const [sandwich, setSandwich] = useState("sandwich:");

  function addBread(): void {
    setSandwich(`${sandwich} bread`);
  }

  function addCheese(): void {
    setSandwich(`${sandwich} cheese`);
  }

  function addSausage(): void {
    setSandwich(`${sandwich} sausage`);
  }

  const addIngredient = (ingredient:string) => () => {
    setSandwich(`${sandwich} ${ingredient}`)
  }


   const initialVariant ={
    hidden:{opacity: 1, rotate: -30},
    visible: {opacity: 1, rotate: 0, transition: {duration: 0.8}}
    }

  return (
    <motion.div
    initial='hidden'
    animate='visible'
    variants={initialVariant}
    >
      <h1>Sandwich</h1>
      <p>{sandwich}</p>
      {/* TODO - Universal button -> нужно детально разобрать!!!!! */}
      <button onClick={addIngredient("bread")}>Universal button</button>

      <button className={style.btn1} onClick={addBread}>
        add bread
      </button>
      <button className={style.btn2} onClick={addCheese}>
        add cheese
      </button>
      <button onClick={addSausage}>add sausage</button>


    </motion.div>
  );
};

export default Sandwich;
