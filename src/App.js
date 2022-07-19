import React from "react"
import Header from './components/Header/Header'
import Home from './components/Home/Home'
// import Features from './components/Features/Features'
import Experience from "./components/Experience/Experience"
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
// import Testimonal from './components/Testimonial/Testimonial'
// import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from "./components/Footer/Footer"



import "./App.css"

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      {/* <Features/> */}
      <Experience/>
      <Portfolio/>
      <Resume/>
      {/* <Testimonal/> */}
      {/* <Blog/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App