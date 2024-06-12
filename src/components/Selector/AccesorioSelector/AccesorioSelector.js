import React from 'react';

import '../Selector.css';

const AccessorioSelector = ({ selectedAccessorio, setSelectedAccessorio }) => {
  const accessorios = ['camiseta y pelota de futbol', 'guitarra electrica', 'notebook'];

  return (
    <div className="selector-box selector-accesorio">
      <h3>Accesorio</h3>
      <div className='selector-item'>
        {accessorios.map(accessorio => (
          <div key={accessorio}>
            <input 
              type="radio" 
              value={accessorio} 
              checked={selectedAccessorio === accessorio} 
              onChange={(e) => setSelectedAccessorio(e.target.value)} 
            />
            {accessorio}
          </div>
        ))}
      </div>

    </div>
  );
};

export default AccessorioSelector;