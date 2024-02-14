import { useEffect, useState } from "react";
import style from "./DogCard.module.css";
import MyButton from "../myButton/MyButton";

function DogCard(): JSX.Element {
  const [url, setUrl] = useState("");

  async function getDog() {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const dataObj = await data.json();
    setUrl(dataObj.message);
  }

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div className={style.container}>
      <h1>Random Dog</h1>
      
      <div className={style.imgWrapper}>
        <img className={style.imgDog} src={url} alt="" />
      </div>

      <div>
        {/* <button type="button" onClick={() => getDog()}>
          Push me
        </button> */}
    <MyButton text = "get new dog" onClick = {getDog}/>
      
      </div>
    </div>
  );
}

export default DogCard;
