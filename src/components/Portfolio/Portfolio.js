import React from "react"
import "./Portfolio.css"



const portfolio_data = [
  {
    id: 1,
    image: "https://user-images.githubusercontent.com/77120718/180050654-df7f5e4a-9eb4-4e24-aa9d-a394446cbc11.jpeg",
    title: "Arabian style restaurant website",
    github: "https://github.com/LeelaSai333/Gericht",
    demo: "https://github.com/LeelaSai333/crackmovies"
  },
  {
    id: 2,
    image: "https://user-images.githubusercontent.com/77120718/180049850-9306c462-5b0b-4a2b-8378-bce49857ffd5.jpeg",
    title: "Crackmovies -  movie search directory",
    github: "https://github.com/LeelaSai333/crackmovies",
    demo: "https://crackmovies.herokuapp.com/"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Logo design creativity & Application ",
    github: "https://github.com",
    demo: "https://github.com/LeelaSai333/crackmovies"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Mobile app landing design & Services",
    github: "https://github.com",
    demo: "https://github.com/LeelaSai333/crackmovies"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Design for tecnology & services",
    github: "https://github.com",
    demo: "https://github.com/LeelaSai333/crackmovies"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8MTYlM0E5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "App for tecnology & services",
    github: "https://github.com",
    demo: "https://github.com/LeelaSai333/crackmovies"
  },
]
const Portfolio = () => {
  return (
      <section className='Portfolio top' id='portfolio'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO</h4>
            <h1>My Portfolio</h1>
          </div>
          <div className='container portfolio_container'>
            {
              portfolio_data.map(({id,image,title,github,demo}) => {
                return (
                  <article key={id} className="portfolio_item">
                  <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio_item-cta">
                    <a href={github} className="btn_shadow" target="_blank" rel="noreferrer">Github</a>
                    <a href={demo} className="btn_shadow" target="_blank" rel="noreferrer">Live Demo</a> 
                    </div>
                  </article>
                )
              })
            }  
          </div>
      </section>
  )
}

export default Portfolio
