import { InspectorNotification } from 'inspector'
import React, {Fragment} from 'react'
import logo from '../imagenes/logo.png';
import { Opcion } from './Opcion'

interface Opciones {
    inicio: string,
    miLista: string,
    amigos: string;
}

export function BarraNavegacion({inicio, miLista, amigos}: Opciones) {
    return (
        <Fragment>
            <nav className="bg-#141414 shadow-lg">
                <div className="px-7">
                    <div className="flex justify-between">
                        <div className="flex">
                            <a href="#" className="flex items-center py-4 px-3">
                                <img src={logo} alt="Logo" className="h-8 w-20 mr-10"/>
                            </a>
                            <div className="flex items-center space-x-5">
                                <Opcion nombre='Inicio' direccion='' activo={inicio}/> 
                                <Opcion nombre='Mi Lista' direccion='/miLista' activo={miLista}/> 
                                <Opcion nombre='Amigos' direccion='/amigos' activo={amigos}/> 
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <a href="" className="py-2 px-2 bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white border border-blue-400 hover:border-transparent rounded">Iniciar Sesión</a>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
