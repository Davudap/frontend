import React, { useState } from 'react';

import TypeSelector from '../Selector/TypeSelector/TypeSelector';
import ColorSelector from '../Selector/ColorSelector/ColorSelector';
import AccessorioSelector from '../Selector/AccesorioSelector/AccesorioSelector';
import Resultado from '../Selector/Resultado/Resultado';
import UserNavbar from '../Navbar/UserNavbar/UserNavbar';

import "./CrearPeluche.css"


const CrearPeluche = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedAccessorio, setSelectedAccessorio] = useState('');

  const handleSave = () => {
    const configuration = { selectedType, selectedColor, selectedAccessorio };
    console.log('Configuración Guardada:', configuration);
  };
  return (
    <div>
      <UserNavbar/>
      <h1>Personaliza tu Peluche</h1>
      <div className="crear-peluche-box">
        <div>
        <TypeSelector selectedType={selectedType} setSelectedType={setSelectedType} />
        <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <AccessorioSelector selectedAccessorio={selectedAccessorio} setSelectedAccessorio={setSelectedAccessorio} />

        </div>

        <div>
        {selectedType && selectedColor && selectedAccessorio && (
        <Resultado 
          selectedType={selectedType} 
          selectedColor={selectedColor} 
          selectedAccessorio={selectedAccessorio} 
          handleSave={handleSave} 
        />
        )}
        </div>
      </div>
    </div>

  );
}

export default CrearPeluche;