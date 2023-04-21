import Nav from './Nav'
import { Outlet } from 'react-router'

export default () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}
