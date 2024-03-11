import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Encabezado de la aplicación */}
        <Header />
        {/* Definición de las rutas */}
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Home />} />
          {/* Otras rutas */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Pie de página de la aplicación */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;


