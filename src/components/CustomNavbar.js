import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h2 style={{color:"black"}}>ScubaSports.in <br /><h6>Experience the thrill</h6></h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><h6>Home</h6></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/ScubaDive"><h6>ScubaDive</h6></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/WaterActivity"><h6>WaterActivity</h6></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/OtherActivity"><h6>OtherActivity</h6></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Contact"><h6>Contact </h6></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About"><h6>About</h6></Link>
              </li>




            </ul>


          </div>
        </div>
      </nav>
    </div>
  )
}


