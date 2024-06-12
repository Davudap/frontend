import React from 'react';

import '../Selector.css';


const ColorSelector = ({ selectedColor, setSelectedColor }) => {
  const colors = ['rosa', 'amarillo', 'verde'];

  return (
    <div className="selector-box selector-color">
      <h3>Color:</h3>
      <div className="selector-item">
      {colors.map(color => (
          <div key={color}>
            <input 
              type="radio" 
              value={color} 
              checked={selectedColor === color} 
              onChange={(e) => setSelectedColor(e.target.value)} 
            />
            {color}
          </div>
        ))}
      </div>

    </div>
  );
};

export default ColorSelector;