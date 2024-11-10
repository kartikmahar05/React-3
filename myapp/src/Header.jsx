import {Link} from "react-router-dom"
import React from 'react'

const Header = () => {
  return (
    <div id='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Gallery'}>Gallery</Link>
    </div>
  )
}

export default Header