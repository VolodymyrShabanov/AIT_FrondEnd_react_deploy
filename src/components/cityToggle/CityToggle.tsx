import { FC, useState } from "react"
import MyButton from "../myButton/MyButton";

const CityToggle: FC = () => {
    const berlin = {
        name: "Berlin",
        title: "Capital of Germany",
        imgUrl: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2017/09/14204915/Berlin-City-View-870x400.jpg"
    }

    const paris = {
        name: "Paris",
        title: "Capital of France",
        imgUrl: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/medium_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
    }

    const [isBerlin, setIsBerlin] = useState(true);
    const [cityData, setCityData] = useState(berlin);

    const toggleCity = ():void => {
        
        if (isBerlin) {
            setCityData(paris);
        }else {
            setCityData(berlin);
        }
       setIsBerlin(!isBerlin);
    }

    // console.log(isBerlin);

    return (
        <div className="App">
            <h1>{cityData.name}</h1>
            <p>{cityData.title}</p>
            <img width={600} src={cityData.imgUrl} alt="" />

            {/* <button type="button" onClick={toggleCity}>Change</button> */}
            <br />
            <MyButton text={"Changer City"} onClick={toggleCity}/>
        </div>
    )
}

export default CityToggle;