import React, { Fragment } from 'react'

export function Serie() {
  return (
    <Fragment>
      <div className="p-4 sm:w-1/2 lg:w-1/3 mx-auto">
        <div className='h-full relative m-0 shadow-lg flex bg-#141414 border-2 border-gray-200 border-opacity-60 rounded-lg'>
          <div className='flex-no-shrink'>
            <img alt='' className='lg:h-72 md:h-48 w-full block object-cover mx-auto' src='https://images.justwatch.com/poster/255388636/s276/arcane.webp'/>
          </div>
          <div className='flex-1 card-block relative text-white hover:bg-white hover:text-gray-900 transition duration-500 hover:ease-in'>
            <div className="p-6">
              <h4 className='font-medium text-2xl mb-3'>Card title</h4>
              <p className='leading-normal'></p>
              <p className="text-sm block mt-6">Designation title</p>
              <a className='-m-4 w-12 h-12 bg-blue-dark flex items-center justify-center text-center no-underline rounded-full hover:bg-blue-darker absolute pin-t pin-r' href='#'>
                <i className='text-xl fa fa-plus'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
