import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
        <img src="./assist/logo.png" alt="logo" className='logo' />
        

        <ul className='links'>
          <li>
            <a href="#features" className="nav-links">Features</a>
            <a href="#pricin"className="nav-links">Pricing</a>
            <a href="#download" className="nav-links">Download</a>
            <a href="#class"className="nav-links">Class</a>
            <a href="#lifestyle" className="nav-links">Lifestyle</a>
          </li>
        </ul>

      </div>

      <div className="socials">
          <ul className='social-icons'>
            <li>
              <a href="" className="icons"><img src="./assist/facebook.png" alt=""  className='socialimge'/></a>
              <a href="" className="icons"><img src="./assist/twitter.png" alt="" className='socialimge'/></a>
              <a href="" className="icons"><img src="./assist/instagram.png" alt="" className='socialimge'/></a>
            </li>
          </ul>
          

          <button className='navbutton'>
            <span>Get free trial</span>
          </button>
        </div>

    </nav>
  )
}

export default Navbar