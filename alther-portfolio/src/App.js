import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

function App() {
  return (
    <div className="App">
        <>
            <Header/>
            <main className="main">
                <Home/> 
                <About/> 
                <Skills/>
                <Portfolio/>
            </main>

            <Footer/>
            <Scrollup/>
        </>
    </div>
  );
}

export default App;
