import React from "react";
import logo1 from '../pic/f_logo.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} width="150px" height="100px" alt='' />
          </div>
          <p>© 2022. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer