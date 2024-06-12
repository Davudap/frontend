import React from 'react'

import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';
import Ranking from '../../Ranking/Ranking';
import './HomePage.css'
import {useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();
  
  const goToCrearPeluchePage = () => {
    navigate("/crear_peluche");
  }
  return (
    <div>
      <UserNavbar/>
      <section className="home-content">
      <header className="home-header">
        <h1>Bienvenido {localStorage.getItem('user')}</h1>
        <p>¡Crea el peluche perfecto para ti!</p>
      </header>
        <div className="home-feature">
          <h2>Selecciona tu Peluche Favorito</h2>
          <p>Elige entre una variedad de animales adorables: perro, conejo, oso, mapache y gato.</p>
        </div>
        <div className="home-feature">
          <h2>Personaliza los Detalles</h2>
          <p>Selecciona el color y añade accesorios únicos como una guitarra eléctrica, una camiseta y pelota de fútbol, o una notebook.</p>
        </div>
        <div className="home-feature">
          <h2>Guarda y Administra tus Peluches</h2>
          <p>Guarda tus peluches personalizados y adminístralos fácilmente desde tu perfil.</p>
        </div>

        <button onClick={goToCrearPeluchePage}>
          Comenzar
          </button>

      </section>
      <div className='separator'></div>
      <Ranking/>
    </div>
  )
}

export default HomePage;