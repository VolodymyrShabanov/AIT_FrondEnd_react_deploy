import React, { FC } from "react"
import CityToggle from "../cityToggle/CityToggle"
import CityInform from "../cityInform/CityInform"
import styles from "./CityPage.module.css"

const CityPage: FC = () => {
  return (
    <div className={styles.container}>
      <div >
        <h1>City toggle</h1>
        <CityToggle />
      </div>
      <div>
        <h1>City inform</h1>
        <CityInform />
      </div>
    </div>
  )
}

export default CityPage
