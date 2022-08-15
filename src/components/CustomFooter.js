import React from 'react'
import { Link } from 'react-router-dom'
export default function CustomFooter() {
  return (
    <>
    <br/>
        <footer className="bg-dark text-center text-white">
  
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button"
        >Home</Link>

<Link className="btn btn-outline-light btn-floating m-1" to="/OtherActivity" role="button"
        >Services</Link>

 <Link className="btn btn-outline-light btn-floating m-1" to="/Contact" role="button"
        >Contact</Link>

 <Link className="btn btn-outline-light btn-floating m-1" to="/About" role="button"
        >About</Link>


    </section>
  </div>

  <div className="text-center p-3" >
  Developer : Ankit Kumar<br/>
    © 2022 Copyright  :
    <Link className="text-white" to="/"> goascubadiving.com </Link>
  </div>
</footer>
</>
    
  )
}
