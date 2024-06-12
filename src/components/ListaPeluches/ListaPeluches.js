import React, {useEffect, useState} from 'react'

import '../PelucheBox/PelucheBox.css'
import UserNavbar from '../Navbar/UserNavbar/UserNavbar';
import './ListaPeluche.css'

function PelucheImagen({tipo, color, accesorio}){
  const imagen = require("../../assets/"+tipo+"/"+color+"/"+accesorio+"/imagen.jpeg");

  return(
    <img src={imagen} alt='peluche'/>
  );
}

const ListaPeluches = () => {


    const [data, setData] = useState([]);
    
    const getData = async () =>  {
        try {
            console.log(localStorage.getItem("token"));
          const response = await fetch('http://localhost:8080/peluches/'+localStorage.getItem("user"), {
            method:'GET',
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
            }
          });
          if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
          }
          const res = await response.json();
          console.log("Obteniendo mis peluches");
          console.log(res);
          setData(res);
        } catch (error) {
          console.error('Problema con operacion fetch:', error);
        }
      }

        
  useEffect(()=>{
    getData()}, [])

    const handdleEliminar = async (id) =>{
      try {
        const response = await fetch('http://localhost:8080/peluches/' + id,{
          method: 'DELETE',
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
        }
        }
        )

        if (!response.ok) {
          throw new Error('Error al eliminar el peluche');
        }
        const responseText = await response.text();
        console.log(responseText);
        alert("peluche eliminado");
        getData();
      } catch (err) {
        console.log(err);
        alert("error: no se pudo eliminar");
      }
    }

  return (
    <div className='peluches-div'>

      <UserNavbar/>
      <h2>Mis peluches</h2>

      <React.Fragment>
       

      {data.map((peluche, index) => (
            <div key={index} className='peluche-box peluche-box-lista'>
            <div className='peluche-detalles-div'>
            <div>
              <PelucheImagen tipo={peluche.tipo}  color={peluche.color} accesorio={peluche.accesorio}/>
            </div>'

              <div className='detalles-div'>
                <p>Tipo: {peluche.tipo}</p>
                <p>Color: {peluche.color}</p>
                <p>Accesorio: {peluche.accesorio}</p>
              </div>
             </div>            
            
             <div className='buttons-div'>
                  <button className='eliminarButton' onClick={()=>handdleEliminar(peluche._id)}>Eliminar</button>
                  <button className='editarButton'>Editar</button>
            </div>

               
            </div>

          ))}
      </React.Fragment>

    </div>  
    )
}

export default ListaPeluches;