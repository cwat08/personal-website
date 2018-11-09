import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className="nav-bar">
    <div className="nav-left">
      <Link to="/about">
        <h3 className="nav-item">ABOUT</h3>
      </Link>
    </div>
    <div id="nav-logo">
      <h4 id="logo">C.W.</h4>
    </div>
    <div className="nav-right">
      <Link to="/projects">
        <h3 className="nav-item">PROJECTS</h3>
      </Link>
      <Link to="/resume">
        <h3 className="nav-item">RESUME</h3>
      </Link>
    </div>
  </div>
)

export default Navbar
