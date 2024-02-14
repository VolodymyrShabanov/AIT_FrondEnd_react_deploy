import { FC, useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";

import styles from "./CatCard.module.css";

const CatCard: FC = () => {
  const [fact, setFact] = useState<string>("");
  const [catGif, setCatGif] = useState<string>("");

  const [photoKey, setPhotoKey] = useState(0);

  async function fetchFact() {
    const resp = await fetch("https://catfact.ninja/fact");
    const respObj = await resp.json();
    setFact(respObj.fact);
  }

  function fetchCat() {
    // fetch("https://cataas.com/cat/gif")
    fetch("https://cataas.com/cat?position=centre&json=false")
      .then((respImg) => {
        setCatGif(respImg.url);
        setPhotoKey(photoKey + 1);
      })
      .catch((error) => console.error("Error fetching cat photo:", error));
  }

  function getFact() {
    fetchFact();
  }

  function getGif() {
    fetchCat();
    // console.log("plus");
  }

  useEffect(() => {
    fetchFact();
    fetchCat();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <MyButton text="Update fact" onClick={getFact} />
        <MyButton text="Update Photo/Gif" onClick={getGif} />

      <h4>{fact}</h4>

      <div className={styles.imageWrapper}>
        <img className={styles.image} src={catGif} alt="cat" key={photoKey} />
      </div>  
    
      </div>
    </div>
  );
};

export default CatCard;


