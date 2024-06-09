import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'

// import Services from './components/apiCalls/GetServices'
import Landing from '../src/components/Landing.jsx'
import HomePage from './components/pages/HomePage.jsx'
import Alojamientos from './components/pages/contentPages/Alojamientos.jsx'
import InfoDialisis from './components/pages/contentPages/InfoDialisis.jsx'
import CentrosDialisis from './components/pages/contentPages/CentrosDialisis.jsx'
import CentrosTransplante from './components/pages/contentPages/CentrosTransplante.jsx'
import GuiaNefro from './components/pages/contentPages/GuiaNefro.jsx'
import Laboratorios from './components/pages/contentPages/Laboratorios.jsx'
import ObraSocial from './components/pages/contentPages/ObraSocial.jsx'
import CasasProv from './components/pages/contentPages/CasasProv.jsx'
import Recetario from './components/pages/contentPages/Recetario.jsx'

export function App () {
  return (
    <main>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='home/info-dial' element={<InfoDialisis />} />
          <Route path='home/centro-dial' element={<CentrosDialisis />} />
          <Route path='home/trans' element={<CentrosTransplante />} />
          <Route path='home/guia-nefro' element={<GuiaNefro />} />
          <Route path='home/labs' element={<Laboratorios />} />
          <Route path='home/o-s' element={<ObraSocial />} />
          <Route path='home/casas' element={<CasasProv />} />
          <Route path='home/recetas' element={<Recetario />} />
          <Route path='home/alojamientos' element={<Alojamientos />} />

          {/* CONVERSATORIO ES EL BLOG, NO SE CUANTO LLEVE */}
          {/* <Route path='' element={<Conversatorio/>} /> */}
        </Routes>
      </Router>
    </main>
  )
}
