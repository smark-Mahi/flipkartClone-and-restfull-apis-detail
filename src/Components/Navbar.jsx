import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/makeupcards'>Makeupcards</Link>
      <Link to='/testingapi'>Testingapi</Link>
      <Link to='/plzone'>Plzone</Link>
      <Link to='/login'>Login</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </div>
  )
}

export default Navbar
