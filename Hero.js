import React from 'react'
import './HeroStyles.css'
import Video from '../assets/maldivesV.mp4'
import { AiOutlineSearch } from 'react-icons/ai'


function Hero() {
  return (
    <div className='hero'>
     <video autoPlay loop muted id='video'>
        <source src={Video} type='video/mp4'/>
     </video>
     <div className='overlay'></div>
     <div className='content'> 
     <h1>Travel Around Africa  </h1>
     <h2>First Class Locations In Africa</h2>
     <form className='form'>
       <div> 
        <input type='text' placeholder='Search Destinations'/>
       </div>

       <div>
        <button><AiOutlineSearch className='icon'/></button>
       </div>

     </form>
     </div>
    </div>
  )
}

export default Hero