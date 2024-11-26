import React from 'react'
import Home from './components/Home'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import LugarList from './components/listas/LugarList.jsx'
import Lugar from './components/formularios/Lugar.jsx'
import TipoDesc from './components/formularios/TipoDesc.jsx'
import CausaList from './components/listas/CausaList.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
       
          <Route path='/lugar' element={<LugarList />} />
          <Route path='/lugar/new' element={<Lugar/>} />
          <Route path='/lugar/:id_lugar/edit' element={<Lugar/>} />

          <Route path='/tipo' element={<TipoDesc />} />
          <Route path='/forma' element={<CausaList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}