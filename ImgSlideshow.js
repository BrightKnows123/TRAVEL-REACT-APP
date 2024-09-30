import React from 'react'
import './ImgSlideshowStyles.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import Bigajos from '../../assets/bijagos.jpg'
import Bigajos2 from '../../assets/bijagos2.jpg'
import AnseLazio from '../../assets/anse-lazio.jpg'
import { SiTrueup } from 'react-icons/si';

function ImgSlideshow() {
  return (
    <div name='slideshow' className="container">
<Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={SiTrueup}>
                <div>
                    <img src={Bigajos} alt='/' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={Bigajos2} alt='/'/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={AnseLazio} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>

    </div>
       
  );
};

export default ImgSlideshow