import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h1>GOA SCUBA DIVING <br/><h6>(Our Booking Number : 9330234144)</h6></h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><h6>Home</h6></Link>
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


