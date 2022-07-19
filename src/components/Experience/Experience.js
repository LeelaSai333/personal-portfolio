import React from 'react'
import './Experience.css'
// import {BsPatchCheckFill} from 'react-icons/bs'
import skill1 from "../pic/html.png"
import skill2 from "../pic/css.png"
import skill3 from "../pic/js.png"
import skill4 from "../pic/react.svg"
import skill5 from "../pic/nodejs.png"
import skill6 from "../pic/java.png"
import skill7 from "../pic/mongodb.png"
import skill8 from "../pic/mysql.png"
import skill9 from "../pic/git.png"
import skill10 from "../pic/github.png"
import skill11 from "../pic/vscode.png"

const Experience = () => {
  return (
    <section id='experience'>
        <div className="container">
            <div className='heading text-center '>
                <h4>What Skills i have</h4>
                <h1>My Experience</h1>
            </div>
        <div className="experience_container">
        <div className='home_btn_1'>
            <h4>FRONTEND DEVELOPMENT</h4>
              <div className='experience_frontend'>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill1} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div> 
                </button>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill2} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div> 
                </button>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill3} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div> 
                </button>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill4} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div> 
                </button>
              </div>
            </div>
            <div className='home_btn_1'>
            <h4>BACKEND DEVELOPMENT</h4>
              <div className='experience_backend'>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill5} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div> 
                </button>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill6} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div> 
                </button>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill7} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div> 
                </button>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill8} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div>  
                </button>
              </div>
            </div>
            <div className='home_btn_1'>
            <h4>Others</h4>
              <div className='others'>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill9} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div> 
                </button>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill10} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div> 
                </button>
                <button className='btn_shadow'>
                    <div className="adjust">
                        <img src={skill11} alt='' />
                        <small className='text-light'> Intermediate</small>
                    </div> 
                </button>
              </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Experience