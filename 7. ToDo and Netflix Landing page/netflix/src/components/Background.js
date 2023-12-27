import React from 'react'
import Bgimg from '../images/bg.jpg';
import '../style/background.css'
export default function img() {
  return (
    <img 
    className="background"
    src={Bgimg} 
    alt="Background img"/>
  )
}
