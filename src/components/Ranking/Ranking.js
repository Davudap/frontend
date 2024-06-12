import React, {useEffect, useState} from 'react'

import './Ranking.css'
import '../PelucheBox/PelucheBox.css'


const Ranking = () => {
  
  function PelucheImagen({tipo}){
  
    
  

    const imagen = require("../../assets/"+tipo+".jpeg");
  
    return(
      <img src={imagen} alt='peluche'/>
    );
  }

  const [data, setData] = useState([]);

  const getData = async () =>  {
    try {
      
      const response = await fetch('http://localhost:8080/peluches', {
        method:'GET'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
      }
      const data = await response.json();
      console.log("Obteniendo ranking");
      console.log(data);
      setData(data);
    } catch (error) {
      console.error('Problema con operacion fetch:', error);
    }
  }


useEffect(()=>{
getData()}, [])
  
  return (
    <div className='peluches-div'>
      <h2>Top 3 Peluches Más Elegidos</h2>
      <React.Fragment>
      {data.map((peluche, index) => (
            <div key={index} className='peluche-box peluche-box-ranking'>

              <div className='peluche-imagen-div'>
                <PelucheImagen tipo={peluche._id}/>
                <h4>{peluche._id}</h4>
              </div>

              
              <div className='detalle-div'>
                <h2>{index+1}</h2>
                <p>Cantidad: {peluche.total}</p>
              </div>

            </div>

          ))}
      </React.Fragment>


    </div>
  )
};     


export default Ranking;
