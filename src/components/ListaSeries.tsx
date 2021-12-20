import React, { Fragment } from 'react'
import { Serie } from './Serie'

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
