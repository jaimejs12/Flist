import React, { Fragment } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Logout } from './Logout'
import { Login } from './Login'

export function InicioSesion() {
  return (
    <Fragment>
      <Login />
      <Logout />
    </Fragment>
  )
}
