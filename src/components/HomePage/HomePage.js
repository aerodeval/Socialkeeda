import React from 'react';
import { Component } from 'react'
import  bgvid from "../static/videos/bgmainscreen.mp4";
import './HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
     <div className='mcontainer'>
       
       <div className='wet'>

        <video autoPlay loop  muted style={{ position: "absolute"
      ,width:"100%",height:"100%",objectFit:"cover" }}  >
          <source src={bgvid} type="video/mp4" />
        </video>

        </div>
        <div className='mainsc'>


<div className='mainsc-text'>
        <p > SocialKeeda</p> 

     
        </div>
  
        
<div className='mainsc-sub' >
<p >Your one place Social Media Growth tool</p>   
</div>

   </div>
  
     


     </div>
     
    )
  }
}
