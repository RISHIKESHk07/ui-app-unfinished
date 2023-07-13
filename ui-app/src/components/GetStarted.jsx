import React from 'react'
import styles from '../style';
import { arrowUp } from '../assets';
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
       <p className="font-poppins font-medium text-[18px] leading-[23px]">
       <span className="text-blue">GET</span>      
      </p>
      <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-cointain " />

    </div>
  )
}

export default GetStarted
