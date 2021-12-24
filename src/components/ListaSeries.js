import React, { Fragment, useState, useEffect } from 'react'
import { Serie } from './Serie'
import axios from 'axios';

export function ListaSeries(propiedades) {
  return (
    <Fragment>
      <div>
        <div className="flex flex-wrap -m-4 mt-10">
            <Serie nombre={propiedades.nombre} notaMedia={propiedades.notaMedia} imagen={propiedades.imagen} idSerie={propiedades.id} />          
        </div>
      </div>
    </Fragment >
  )
}
//{data.map(serie => (
//<Serie nombre={serie.nombre} notaMedia={serie.notaMedia} imagen={serie.imagen} idSerie={serie.id} />
//))}