import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className = {classes.navbar}>
      <ul>
        <li>Anime-World</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

export default Navbar