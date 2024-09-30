import React from 'react'
import './DestinationsStyles.css'
import Bigajos from '../../assets/bijagos.jpg'
import Bigajos2 from '../../assets/bijagos2.jpg'
import AnseLazio from '../../assets/anse-lazio.jpg'
import TrouAuxBiche from '../../assets/trou-aux-biche.jpg'
import Shelabeach from '../../assets/shelabeach.jpg'


function Destinations() {
  return (
    <div name='destinations' className='destinations'>
        <div className="container">
            <h1>Top Notch Resorts</h1>
            <p>Explore Africa's Best Beaches</p>
            <div className="img-container">
                <img className='span-3 image-grid-row-2' src={Bigajos} alt="/" />
                <img src={Bigajos2} alt="/" />
                <img src={AnseLazio} alt="/" />
                <img src={TrouAuxBiche} alt="/" />
                <img src={Shelabeach} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Destinations