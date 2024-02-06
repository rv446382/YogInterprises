import React from 'react';
import "./service.css";
import Footer from '../Footer/Footer';

const Service = () => {
  return (

    <div className='top'>
      <div>
        <div>
          <img style={{ width: '100%' }} src='https://woodmizer.in//media/catalog/category/Vertical_Saws_1280x320_2.jpg' alt="img" />
        </div>



        <div className='secondTop'>
          <div className='firstdiv'>
            <img src='https://woodmizer.in/media/catalog/product/t/v/tvs.jpg?width=1280&height=720&store=en_in&image-type=image' />
            <h3>TVS Twin Vertical Saw</h3>
            <span><a href="#" class="know-more">know-more&#8594;</a></span>
          </div>
          <div className='seconddiv'>
            <img src='https://woodmizer.in/media/catalog/product/t/v/tvswithspikychainweb.jpg?width=1280&height=720&store=en_in&image-type=image' />
            <h3> TVS Twin Vertical Saw</h3>
            <span><a href="#" class="know-more">know-more&#8594;</a></span>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Service
