import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <div className="flex">
      <Link to="/projects">
        <h3>Projects</h3>
      </Link>
      <Link to="/resume">
        <h3>Resume</h3>
      </Link>
      <Link to="/about">
        <h3>About</h3>
      </Link>
      <Link to="/contact">
        <h3>Contact</h3>
      </Link>
    </div>
  </nav>
)

export default Navbar
