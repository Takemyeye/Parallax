import React from 'react';
import './styles/404.css'
import './styles/preloader.css'

const NotFound = () => {
  return (
   <div className='Conteiner-404'>
    <div className="loader">
        <span>P</span>
        <span>a</span>
        <span>r</span>
        <span>a</span>
        <span>l</span>
        <span>l</span>
        <span>a</span>
        <span>x</span>
      </div>
        <div className='conteiner-1-404'>
          <div className='Error'>
            Error 
            <span className='Folling-down-404'>
            4
            <span className='light'>
            0
            </span>
            4
            </span>
          </div>
        <div className='Page'>Page Not Found</div>
      </div>
    </div>
  );
};
export default NotFound;