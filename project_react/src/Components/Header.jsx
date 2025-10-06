import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <nav className ="navbar navbar-expand-lg bg-white">
    <div className ="container-fluid">
      <button data-mdb-button-init className ="navbar-toggler" type="button" data-mdb-collapse-init
        data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className ="fas fa-bars"></i>
      </button>
      <div className ="collapse navbar-collapse" id="navbarExample01">
        <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
          <li className ="nav-item active">
            <Link className ="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className ="nav-item">
            <Link className ="nav-link" to="/Form">Form</Link>
          </li>
          <li className ="nav-item">
            <Link className ="nav-link" to="/Blog">Blog</Link>
          </li>
          <li className ="nav-item">
            <a className ="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      
    </>
  )
}

export default Header



