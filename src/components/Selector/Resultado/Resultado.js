import React from 'react';

import './Resultado.css';


const Resultado = ({ selectedType, selectedColor, selectedAccessorio}) => {
  
  const imagen = require("../../../assets/"+selectedType+"/"+selectedColor+"/"+selectedAccessorio+"/imagen.jpeg");

    const handleSave = async (e) => {
        e.preventDefault();


        try {
            const datos = JSON.stringify({tipo:selectedType, color:selectedColor, accesorio:selectedAccessorio, email_propietario:localStorage.getItem('user')});


            const response = await fetch('http://localhost:8080/peluches', {
              method:'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token"))
              },
              body: datos
            });

            const responseText = await response.text();

            if (response.status !== 201) {
              throw new Error(response.status + ' ' + responseText);
            }
            console.log(responseText);
            alert("Peluche creado");
        } catch (error) {
            console.error('Problema con operacion fetch:', error);
            alert(error);
          }



    }
  
    return (
    <div className='imagen-box'>
      <img src={imagen} alt='peluche'/>
      <button onClick={handleSave} className='crear-button'>Crear peluche</button>
    </div>
  );
};

export default Resultado;