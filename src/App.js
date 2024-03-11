import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About'; // Asegúrate de importar los componentes necesarios
import Services from './pages/Services'; // Asegúrate de importar los componentes necesarios
import Contact from './pages/Contact'; // Asegúrate de importar los componentes necesarios

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Home />} />
          {/* Otras rutas */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

