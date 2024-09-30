import React from 'react'
import './SelectsStyles.css'

import Bigajos from '../../assets/bijagos.jpg'
import Bigajos2 from '../../assets/bijagos2.jpg'
import AnseLazio from '../../assets/anse-lazio.jpg'
import TrouAuxBiche from '../../assets/trou-aux-biche.jpg'
import Shelabeach from '../../assets/shelabeach.jpg'
import Namabay from '../../assets/nama-bay.jpg'

import SelectsImages from '../SelectsImage/SelectsImages'
function Selects() {
  return (
    <div name='views' className='selects'>
      <div className="container">
        
     <SelectsImages bgImg={Bigajos} text='Bogajos'/>
     <SelectsImages bgImg={Bigajos2} text='Bogajos2'/>
     <SelectsImages bgImg={AnseLazio} text='AnseLazio'/>
     <SelectsImages bgImg={TrouAuxBiche} text='TrouAuxBiche'/>
     <SelectsImages bgImg={Shelabeach} text='Shelabeach'/>
     <SelectsImages bgImg={Namabay} text='Namabay'/>
      </div>
  
    </div>
  )
}

export default Selects