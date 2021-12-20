import React, { Fragment, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { Inicio } from './components/Inicio';
import { MiLista } from './components/MiLista';
import { Amigos } from './components/Amigos';
import { BarraNavegacion } from './components/BarraNavegacion';

function App() {

  const baseUrl = "http://localhost/flist/";
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        console.log(response.data);
      })
  }

  useEffect(() => {
    peticionGet();
  }, [])

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

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
