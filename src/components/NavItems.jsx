import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo/logo.png'
import iconSearch from '../assets/images/icon/i-search.png'
import iconCart from '../assets/images/icon/i-shop.png'
import iconProfile from '../assets/images/icon/i-profile.png'

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggel, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    //add event listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    });


  return (
    <header className={`header-section style-4 ${headerFixed?"header-fixed fadeInUp":""}`}>
        <div className={`header-top d-md-none ${socialToggel ? "open" : ""}`}>
            <div className="container">
                <div className="header-top-area">
                    <Link to="/signup" className="lab-btn me-3">
                        <span>Sign Up</span>
                    </Link>
                    <Link to="/login" className="">
                        <span>Login</span>
                    </Link>
                </div>
            </div>
        </div>

        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">

                    {/* menu-toggler */}
                        <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active":""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    <div className="logo-search-acte">
                        <Link to="/" className="logo">
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                    {/* menu area */}
                    <div className="menu-area">
                        <div className="menu">
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* button sign in & login */}
                        <Link to="/signup" className="me-3 d-md-block">
                            <img src={iconSearch} alt="" />
                        </Link>
                        <Link to="/signup" className="me-3 d-md-block">
                            <img src={iconCart} alt="" />
                        </Link>
                        <Link to="/signup" className="me-3 d-md-block">
                            <img src={iconProfile} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems