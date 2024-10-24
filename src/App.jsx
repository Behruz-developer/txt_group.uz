import React from 'react'
import Nav from './Components/Nav/Nav'
import Upcoming from './Components/Upcoming/Upcoming'
import Catalog from './Components/Catalog/Catalog'
import Footer from './Components/Footer/Footer'
import img1 from "./assets/images/slide.mp4";


const App = () => {
  const images = [img1];
  return (
    <div>
      <Nav/>
      <Upcoming images={images}/>
      <Catalog/> 

      <Footer/>
    </div>
  )
}

export default App
