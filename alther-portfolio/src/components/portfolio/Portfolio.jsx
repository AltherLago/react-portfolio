import React from 'react'
import "./portfolio.css"
import { Data } from './Data'

const Portfolio = () => {
    return (
        <section className="portifolio container section">
            <h2 className="section__title">Meu Portifólio</h2>
            <span className="section__subtitle">Projetos Recentes</span>
            
            <div className="portfolio__container">
                {Data.map(({id, image, title}) => {
                    return (
                        <div className="portfolio__card" key={id}>
                            <img src={image} alt="i"
                            className='portfolio__img'/>

                            <h3 class="portfolio__name">{title}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio
