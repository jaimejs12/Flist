import React from 'react'

interface Opcion {
    nombre: string,
    activo: string,
    direccion: string;
}

export function Opcion({nombre, activo, direccion}: Opcion) {
    var clase = 'py-4 px-2 text-gray-500 font-semibold hover:text-blue-400'
    clase = clase.concat(' ', activo)
    return (
        <a className={clase} href={direccion}>{nombre}</a>
    )
}