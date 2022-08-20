import React from 'react'
import { Link } from 'react-router-dom'
export default function CustomFooter() {
  return (
    <>
    <br/>
        <footer className="bg-lightblue text-center text-black" style={{backgroundColor:'#ECF0F1'}} >
  
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <Link className="btn btn-outline-dark btn-floating m-1" to="/" role="button"
        >Home</Link>

<Link className="btn btn-outline-dark btn-floating m-1" to="/OtherActivity" role="button"
        >Services</Link>

 <Link className="btn btn-outline-dark btn-floating m-1" to="/Contact" role="button"
        >Contact</Link>

 <Link className="btn btn-outline-dark btn-floating m-1" to="/About" role="button"
        >About</Link>


    </section>
  </div>

  <div className="text-center p-3" >
  Developer : Ankit Kumar<br/>
    © 2022 Copyright  : All right reserved <br/>
    <Link className="text-black" to="/"> scubasports.in </Link><br/>
    <a href='https://www.termsandconditionsgenerator.com/live.php?token=s1VRyOBiRDtqOVyaB2CEWsy58ubTDDAw' alt='terms and condition'>Terms & Condition</a><br/>
    Mail : contact@scubasports.in
  </div>
</footer>
</>
    
  )
}
