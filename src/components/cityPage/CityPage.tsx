import React, { FC } from "react"
import CityToggle from "../cityToggle/CityToggle"
import CityInform from "../cityInform/CityInform"
import styles from "./CityPage.module.css"
import { motion } from "framer-motion"


const initialVariant ={
  hidden:{opacity: 1, scale: 0.8},
  visible: {opacity: 1, scale: 1, transition: {duration: 0.8}}
  
}

const CityPage: FC = () => {
  return (
    <motion.div 
    initial='hidden'
    animate='visible'
    variants={initialVariant}
    
    
    className={styles.container}>
      <div >
        <h1>City toggle</h1>
        <CityToggle />
      </div>
      <div>
        <h1>City inform</h1>
        <CityInform />
      </div>
    </motion.div>
  )
}

export default CityPage
