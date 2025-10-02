import { useState } from 'react'
import './App.css'
import SplitText from "../components/SplitText";
import BlurText from "../components/BlurText";
import CircularText from '../components/CircularText';
import '../components/CircularText.css'
import ShinyText from '../components/ShinyText';
import '../components/ShinyText.css';
import { color } from 'motion/react';

function ManualHome() {

  return (
    <>
      <div className='header-container'>
        <div className='header-box-logo'>
          <h1>LOGO</h1>
        </div>
        <div className='header-box-menu'>
          <span>Manuais em Geral</span>
        </div>

        <div>
          <button className='btn-search-manual'>Pesquisar</button>
        </div>
      </div>

      <section className='home-container'>
        <div className='home-box-text'>

          <BlurText
            text="Bem vindo ao Manual da GPI!"
            delay={180}
            animateBy="words"
            direction="top"
            className="text-2xl text-gradient mb-8"
          />

          <BlurText
            text="Todos os manuais do Vertis reunidos em um local apenas, para que todos tenham acesso."
            delay={200}
            animateBy="words"
            direction="bottom"
            className="text-2x2 text-gradient mb-8"
          />
        
          <ShinyText
            text="Clique no botão abaixo para ser redirecionado!"
            disabled={false}
            speed={3}
            className='custom-class'
          />

          <CircularText
            text="VER MANUAIS "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div>
      </section>
    </>
  )
}

export default ManualHome;
