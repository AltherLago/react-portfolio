import React from "react";
import "./home.css"
import Social from "./Social"
import Data from "./Data";

export default function Home() {
    return(
        <section id="home" className="home section">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>
                    <Data/>
                    <div className="home__img"></div> 
                </div>
            </div>
        </section>
    )
}

