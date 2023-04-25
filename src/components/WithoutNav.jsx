import React from 'react'
import { Outlet } from 'react-router'
import '../styles/background.css'

export default () => {
  return (
    <div id="background">
      <Outlet />
    </div>
  )
}
