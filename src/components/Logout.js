import React, { Fragment } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Logout = () => {
  const { logout, isAuthenticated, user } = useAuth0()
  return (
    isAuthenticated && (
      <div className='flex'>
        <h2 className='font-semibold text-gray-200 pt-2 hidden md:block'>{user.name}</h2>
        <img className='h-8 pt-2 pl-2 pr-2 rounded hidden md:block' src={user.picture} alt={user.name}></img>
        <button onClick={() => logout({ returnTo: window.location.origin })} className="py-2 px-2 bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white border border-blue-400 hover:border-transparent rounded">
          Cerrar Sesión
        </button>
      </div>
    )
  )
}
