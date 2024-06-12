import React from 'react'

import '../Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';


const UserNavbar = () => {

  const navigate = useNavigate();
  
  const goToPublicPage = () => {
    navigate("/");
  }


  const handdleLogout = () => {
    console.log("Limpiando local storage")
    localStorage.clear('user')
    localStorage.clear('token');
    goToPublicPage();
  }

  return (
    <div className='navbar user_navbar'>
        <div className='leftNavbar'>
            <p>App</p>
        </div>

        <div className='rightNavbar'>
        <ul className="nav_list">
           <li className="nav_item">
             <NavLink to="/home" className="navlink">
               Home
             </NavLink>
           </li>
           <li className="nav_item">
             <NavLink to="/mis_peluches" className="navlink">
               Mis Peluches
             </NavLink>
           </li>
           <li className="nav_item">
             <NavLink to="/crear_peluche" className="navlink">
               Crear Peluche
             </NavLink>
           </li>
           <li className="nav_item" onClick={handdleLogout}>
               Cerrar Sesion
           </li>
           </ul>      
        </div>
     </div>  
    )
}

export default UserNavbar;