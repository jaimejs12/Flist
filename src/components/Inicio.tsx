import React, { Fragment } from 'react'
import { BarraNavegacion } from './BarraNavegacion';
import { Filtro } from './Filtro';
import { ListaSeries } from './ListaSeries';

export function Inicio() {
  return (
    <Fragment>
      <main className="flex-1 lg:mt-20">
        <section className="container px-10 mx-auto mt-8">
          <Filtro />
          <ListaSeries />
        </section>
      </main>
    </Fragment>
  )
}