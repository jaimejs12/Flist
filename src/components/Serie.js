import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';

export function Serie(propiedades) {

  const baseUrl = "https://localhost/flist/servicios.php?idSerie=" + propiedades.idSerie;
  const [data, setData] = useState([]);

  var claseNotaMedia;

  if (propiedades.notaMedia >= 9) {
    claseNotaMedia = ' bg-blue-700';
  }
  if (propiedades.notaMedia >= 7 && propiedades.notaMedia < 9) {
    claseNotaMedia = ' bg-green-700';
  }
  if (propiedades.notaMedia >= 5 && propiedades.notaMedia < 7) {
    claseNotaMedia = ' bg-yellow-700';
  }
  if (propiedades.notaMedia < 5) {
    claseNotaMedia = ' bg-red-700';
  }

  claseNotaMedia = claseNotaMedia + ' absolute top-3 right-6 border-2 border-gray-200 rounded py-1 px-1 text-sm';

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
 
  var servicio, direccion;

  if(data.nombre == 'Netflix') {
    servicio = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/900px-Netflix-new-icon.png';
    direccion = 'https://Netflix.com';
  }

  if(data.nombre == 'HBO') {
    servicio = 'https://i.pinimg.com/564x/d0/d4/fd/d0d4fdda32a2154f3c906529527dc306.jpg';
    direccion = 'https://play.hbomax.com/';
  }

  return (
    <Fragment>
      <div className="p-4 sm:w-1/2 lg:w-1/3 mx-auto">
        <div className='h-full relative m-0 shadow-lg flex bg-#141414 border-2 border-gray-200 border-opacity-60 rounded-lg ease-linear transform hover:scale-105 transition duration-200'>
          <div className='flex-no-shrink relative'>
            <img alt={propiedades.nombre} className='lg:h-80 md:h-60 sm:h-80 w-full block object-cover mx-auto rounded-md' src={propiedades.imagen} />
          </div>
          <div className='flex-1 card-block relative text-white hover:bg-gray-900 transition duration-500 hover:ease-in'>
            <div className={claseNotaMedia}>
              {propiedades.notaMedia}
            </div>
            <div className="px-6 py-12">
              <h3 className='font-medium text-2xl mb-3'>{propiedades.nombre}</h3>
              <div className='py-2 border-t border-b text-xs'>
                <span className='flex iems-center mb-1'>
                  Puedes verla en:
                </span>
                <span className='flex iems-center'>
                  <a title={data.nombre} href={direccion}><img alt={data.nombre} className='h-4 w-4 rounded-md' src={servicio} /></a>
                </span>
              </div>
              <div className='absolute bottom-3 right-6 text-sm'>
                <button className='border-2 hover:bg-gray-400 border-gray-200 hover:text-black rounded'>
                  <div className='py-1 px-1'>
                    Añadir
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
