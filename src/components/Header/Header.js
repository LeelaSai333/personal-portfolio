import React, { useEffect, useState } from "react"
import "./Header.css"
import logo from "../pic/logo.png"

const Header = () => {
  // fixed Header
  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector(".header")
  //   header.classList.toggle("active", window.scrollY > 50)
  // })
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      }else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onScroll);
  },[])
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className={scrolled ? "header" : ""}>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li><a href='#home'>home</a></li>
              {/* <li><a href='#features'>features</a></li> */}
              <li><a href='#experience'>skills</a></li>
              <li><a href='#portfolio'>portfolio</a></li>
              <li><a href='#resume'>resume</a></li>
              {/* <li><a href='#clients'>clients</a></li> */}
              {/* <li><a href='#blog'>blog</a></li> */}
              {/* <li><a href='#contact'>contact</a></li> */}
              <li><a href='#contact'>contact<button className='home-btn'>Let's Connect</button></a></li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className="fas fa-times close home-btn"/> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header