import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarWarsApp from './Components/StarWarApp';

const App = () => {
  return (
    
      <div>
        <Routes>
          <Route path="/" element={<StarWarsApp />} />
          <Route
            path="/:resource/:id"
            element={<StarWarsApp />}
          />
        </Routes>
      </div>
    
  );
};

export default App;
