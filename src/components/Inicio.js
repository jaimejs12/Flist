import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import { Dropdown } from './Dropdown';
import { Serie } from './Serie';

export function Inicio() {

  const baseUrl = "https://localhost/flist//";
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("Servicio de Streaming");

  const handleInputChange = (event) => {
    axios.get(baseUrl + '?nombre=' + event.target.value)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(async () => {
    await peticionGet();
  }, [])

  return (
    <Fragment>
      <main className="flex-1 lg:mt-20">
        <section className="container px-10 mx-auto mt-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col flex-shrink-0 w-full">
              <div className="flex flex-col mt-2 space-y-1 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-4">
                <h3 className="text-xl font-semibold text-gray-200">Listado completo de series</h3>
              </div>
            </div>
            <div className="my-2 flex sm:flex-row flex-col h-10">
              <div className="flex flex-row">
                <div className="relative select-none">
                  <Dropdown selected={selected} setSelected={setSelected}/>
                </div>
              </div>
              <div className="block relative pl-5">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-8">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-200">
                    <path
                      d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                    </path>
                  </svg>
                </span>
                <input onChange={handleInputChange} placeholder="Buscar" className="h-10 appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-gray-900 text-sm placeholder-gray-400 text-gray-700 focus:bg-gray-700 focus:placeholder-gray-600 focus:text-gray-200 focus:outline-none" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 mt-10">
            {data.map(serie => (
              <Serie key={serie.id} nombre={serie.nombre} notaMedia={serie.notaMedia} imagen={serie.imagen} idSerie={serie.id} />
            ))}
          </div>
        </section>
      </main>
    </Fragment>
  )
}