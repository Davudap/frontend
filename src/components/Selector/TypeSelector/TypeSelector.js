import React from "react";


const TypeSelector = ({ selectedType, setSelectedType }) => {
    const types = ['perro', 'conejo', 'oso', 'mapache', 'gato'];
  
    return (
      <div className="selector-box selector-type">
          <h3>Tipo:</h3>
          <div className="selector-item">
          {types.map(type => (
            <div key={type}>
              <input 
                type="radio" 
                value={type} 
                checked={selectedType === type} 
                onChange={(e) => setSelectedType(e.target.value)} 
              />
              {type}
            </div>
          ))}
        </div>

      </div>
    );
  };
  
  export default TypeSelector;