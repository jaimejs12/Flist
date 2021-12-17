import React, { Fragment } from 'react'
import { isIntersectionTypeNode, OperationCanceledException } from 'typescript';
import './App.css';
import { BarraNavegacion } from './components/BarraNavegacion';
import { Filtro } from './components/Filtro';
import { ListaSeries } from './components/ListaSeries';
import filtro from './imagenes/filter.svg';

function App() {
  return (
    <Fragment>
      <BarraNavegacion inicio='border-b-4 border-blue-400' miLista='' amigos='' />
      <main className="flex-1 lg:mt-20">
        <section className="container px-4 mx-auto mt-8">
          <Filtro />
          <ListaSeries />
        </section>
      </main>
    </Fragment>
  );
}

export default App;


