import React from 'react';
import "./about.css";
import Footer from '../Footer/Footer';

const Production = () => {
    return (
        <div className='top'>
      <div>
        <div>
          <img style={{ width: '100%' }} src='https://woodmizer.in/media/.renditions/wysiwyg/WM-Australia/LX50sLaunchOceania1920x720desk_1.jpg' alt="img" />
        </div>



        <div className='secondTop'>
          <div className='firstdiv'>
            <img src='https://woodmizer.in/media/.renditions/wysiwyg/WM-Asia/IN/Hero/WMWay_1_Slider_IN.jpg' />
            <h3>Portable Sawmills</h3>
            <span><a href="#" class="know-more">know-more&#8594;</a></span>
          </div>
          <div className='seconddiv'>
            <img src='https://woodmizer.in/media/.renditions/wysiwyg/WM-Asia/IN/Hero/WMWay_1_Slider_IN.jpg' />
            <h3> Portable Sawmills</h3>
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

export default Production
