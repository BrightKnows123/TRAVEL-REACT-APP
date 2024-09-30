import React from 'react'
import './SelectsImagesStyles.css'

function SelectsImages({bgImg, text}) {
  return (
    <div className='selects-location'>
        <img src={bgImg} alt="/" />
        <div className="overlay">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default SelectsImages