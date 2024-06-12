import React from 'react'

import '../Navbar.css';
import { useNavigate } from 'react-router-dom';



const PublicNavbar = () => {

    const navigate = useNavigate();
  
    const goToLoginPage = () => {
      navigate("/login")
    }

  return (
    <div className='navbar'>
        <div className='leftNavbar'>
            <p>App</p>
        </div>

        <div className='rightNavbar'>
            <button className='btnLogin' onClick={()=>goToLoginPage()}>Iniciar Sesion</button>
        </div>
    </div>  )
}

export default PublicNavbar;