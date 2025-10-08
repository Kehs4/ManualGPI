import { useState } from 'react'
import './App.css'
import SplitText from "../components/SplitText";
import BlurText from "../components/BlurText";
import CircularText from '../components/CircularText';
import '../components/CircularText.css'
import ShinyText from '../components/ShinyText';
import '../components/ShinyText.css';
import Particles from '../components/Particles';
import '../components/Particles.css'
import { color } from 'motion/react';
import { Link } from 'react-router-dom';

function ManualHome() {

  return (
    <>

      <div className='header-container'>
        <div className='header-box-logo'>
          <img src="https://v1.laudosonline.com.br/hom/assets/images/favicon.png" sizes="32x32" type="image/png" />
        </div>
      </div>


      <section className='home-container'>

        <div style={{ width: '100%', height: '100dvh', position: 'absolute' }}>
          <Particles
            particleColors={['#ff0000', '#ff6600']}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={130}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
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
          <Link to='/manuals'>
            <CircularText
              text="VER MANUAIS "
              onHover="speedUp"
              spinDuration={20}
              className="manuals-button"
            />
          </Link>


        </div>
      </section>
    </>
  )
}

export default ManualHome;
