import React, { Fragment } from 'react'
import netflixIcon from '../imagenes/netflix_icon.png';
import hboIcon from '../imagenes/hbo_icon.png';

export function Serie() {
  return (
    <Fragment>
      <div className="p-4 sm:w-1/2 lg:w-1/3 mx-auto">
        <div className='h-full relative m-0 shadow-lg flex bg-#141414 border-2 border-gray-200 border-opacity-60 rounded-lg ease-linear transform hover:scale-105 transition duration-200'>
          <div className='flex-no-shrink relative'>
            <img alt='' className='lg:h-72 md:h-52 sm:h-56 w-full block object-cover mx-auto rounded-md' src='https://images.justwatch.com/poster/255388636/s276/arcane.webp' />
          </div>
          <div className='flex-1 card-block relative text-white hover:bg-gray-900 transition duration-500 hover:ease-in'>
            <div className='absolute top-3 right-6 border-2 border-gray-200 bg-green-700 rounded py-1 px-1 text-sm'>
              Nota
            </div>
            <div className="px-6 py-12">
              <h3 className='font-medium text-2xl mb-3'>Arcane</h3>
              <div className='py-2 border-t border-b text-xs'>
                <span className='flex iems-center mb-1'>
                  Puedes verla en:
                </span>
                <span className='flex iems-center'>
                  <img alt='' className='h-4 w-4 rounded-md' src={netflixIcon} />
                  <img alt='' className='h-4 w-4 ml-2 rounded-md' src={hboIcon} />
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
