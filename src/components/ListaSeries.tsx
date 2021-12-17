import React, { Fragment } from 'react'
import { Serie } from './Serie'

//<div className="mt-10 grid grid-cols-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
//<div className=" w-full lg:max-w-full lg:flex">

export function ListaSeries() {
  return (
    <Fragment>
      <div>
      
        <div className="flex flex-wrap -m-4 mt-10">
        <Serie/>
        <Serie/>
        <Serie/>
        <Serie/>
        </div>
      </div>
    </Fragment >
  )
}
