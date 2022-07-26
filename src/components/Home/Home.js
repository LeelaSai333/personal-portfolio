import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <section className='home' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Leela Sai Kumar</span>
            </h1>
            <h2>
              <span>
                <Typewriter
                  options={{
                    strings: ['Enthusiastic Dev', 'Full Stack Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>

            <p>An Enthusiastic person , an amateur coder who loves to explore and develop more things in the form of technology which helps in solving problems </p>

            <div className='home_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                  <a href="https://www.linkedin.com/in/leela-sai-kumar-dadi/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" ></i></a>
                  </button>
                  <button className='btn_shadow'>
                  <a href="https://github.com/LeelaSai333" target="_blank" rel="noreferrer"><i className="fab fa-github" ></i></a>
                  </button> 
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home