import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/navbar/hero/Hero';
import Destinations from './components/destinations/Destinations';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import ImgSlideshow from './components/slideshow/ImgSlideshow';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search />
      <Selects/>
      <ImgSlideshow/>
      <Footer/>
    </div>
  );
}

export default App;
