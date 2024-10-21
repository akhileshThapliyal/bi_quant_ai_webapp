import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import routes from './Routes/routes';

function App() {
  return(
    <div className="wrapper d-flex flex-column justify-between">
      <Router> 
        <Header/>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
