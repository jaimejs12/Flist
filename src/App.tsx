import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import { Inicio } from './components/Inicio';
import { MiLista } from './components/MiLista';
import { Amigos } from './components/Amigos';
import { BarraNavegacion } from './components/BarraNavegacion';

function App() {
  return (
    <Fragment>
      <BarraNavegacion />
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="miLista" element={<MiLista />} />
        <Route path="amigos" element={<Amigos />} />
        <Route path="*" element={<Inicio />} />
      </Routes>
    </Fragment>
  );
}

export default App;