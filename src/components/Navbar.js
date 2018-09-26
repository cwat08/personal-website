import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <div className="flex">
      <Link to="/about">
        <h3 className="nav-item">ABOUT</h3>
      </Link>
      <Link to="/projects">
        <h3 className="nav-item">PROJECTS</h3>
      </Link>
      <Link to="/resume">
        <h3 className="nav-item">RESUME</h3>
      </Link>
    </div>
  </nav>
)

export default Navbar
