import React, { Fragment } from 'react';
import logo from '../imagenes/logo.png';
import { Opcion } from './Opcion';
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

export function BarraNavegacion() {
  return (
    <Fragment>
      <nav className="bg-#141414 shadow-lg">
        <div className="px-7">
          <div className="flex justify-between">
            <div className="flex">
              <a href="#" className="flex items-center py-4 px-3">
                <img src={logo} alt="Logo" className="h-8 w-20 mr-10" />
              </a>
              <div className="flex items-center space-x-5">
                <CustomLink to="/">Inicio</CustomLink>
                <CustomLink to="/miLista">Mi Lista</CustomLink>
                <CustomLink to="/amigos">Amigos</CustomLink>
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

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <NavLink
        className={match ? 'text-blue-300 border-b-4 border-blue-400 py-4 px-2 font-semibold' : 'text-gray-200 font-semibold hover:text-blue-400 py-4 px-2'}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    </div>
  );
}
