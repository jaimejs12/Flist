import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios';

export function Captura() {

  const baseUrl = "http://localhost/flist/";
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      })
  }

  useEffect(async () => {
    await peticionGet();
  }, [])

  return (
    <Fragment>
      <div className='text-white'>
        {data.map(serie => (
          <h1>{serie.nombre}</h1>
        ))}
      </div>
    </Fragment>
  );
}
