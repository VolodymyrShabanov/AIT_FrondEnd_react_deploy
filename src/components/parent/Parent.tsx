
import { FC } from "react"
import FlowerCard from "../flowerCard/FlowerCard"


const Parent:FC =() => {
    const rose = {
        color: "pink",
        name: "rose",
        family: "rose",
        price: 12 
    }

    const daisy = {
        color: "yellow",
        name: "daisy",
        family: "daisy",
        price: 8
    }

    return (
        <>
        <h1>Parent</h1>
        <FlowerCard flower={rose}/> 
        <FlowerCard flower={daisy}/>
        </>
    )
}

export default Parent;