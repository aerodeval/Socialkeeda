import React from 'react';
import { Component } from 'react'
import  bgvid from "../static/videos/bgmainscreen.mp4";
import bug from "../static/images/bug.png";
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import { click } from '@testing-library/user-event/dist/click';
window.onload=function(){
  
container.addEventListener("click",getClickPositon,false);

}
var theThing=document.querySelector("#thing");
var container=document.querySelector("#contentContainer");

function getClickPositon(e){
  var xPosition=e.clientX;
  var yPosition=e.clientY;
  var translate3dValue="translate3d("+xPosition +"px,"+yPosition + "px,0)";
theThing.style.transform=translate3dValue;
}



function HomePage() {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }
  
  let navigate = useNavigate();
    
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../static/svg/hbee.json")

    })
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../static/svg/stars.json")
 
    })
  }, [])

  return (



     <div className='mcontainer'>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
       <div className='wet'>
  
        <video autoPlay loop  muted >
          <source src={bgvid} type="video/mp4" />
        </video>

       

        </div>
        <div className='mainsc'>

<div className='cont-home'>
<div className='mainsc-text'>
 
  <p > SocialKeeda </p> 
   <div id="contentContainer">
    <div id="thing"><img className="bugs" src={bug} width="500" height="250" onClick={()=>{navigate('/Home')}} /></div>
    <motion.div transition={{ duration:14}} initial={{x:0,y:-850}} animate={{ x: 2000 }} exit={{x:1600}} className='containers' ref={container}/>
    
 
   </div> 
  
        </div>
  
        
<div className='mainsc-sub' >
<p >Your one place Social Media Growth tool</p>   
</div>
</div>

   </div>
  
     


     </div>
     
    )
  }
export default HomePage
