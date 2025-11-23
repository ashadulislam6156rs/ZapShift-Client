import React from 'react';
import logo from "../assets/web-logo.png"

const Logo = () => {

    return (
      <div className='flex items-end'>
        <img className='w-20 md:w-25' src={logo} alt="" />
       
      </div>
    );
};

export default Logo;