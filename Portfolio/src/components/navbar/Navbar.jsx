import React, {useState} from 'react'
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/WarProductions-logos_transparent.png';

//Bem -> Block element modifier
export const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);
const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#services">Services</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#skills">Skills</a></p>
    <p><a href="#blog">Blog</a></p>
    </>
    )
    
    return (
        <div className="warProd__navbar">
            <div className ="warProd__navbar-links">
                <div className="warProd__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
              <div className="warProd__navbar-links_container">
              <Menu />
              </div>
            </div>
            <div className="warProd__navbar-sign">
                <p> Sign in</p>
                <button type ="button">Sign up</button>
            </div>
        <div className="warProd__navbar-menu">
            {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
        {toggleMenu && (
            <div className="warProd__navbar-menu_container scale-up-center">
               <div className="warProd__navbar-menu_container-links">
                <Menu/>
                  <div className="warProd__navbar-menu_container-links-sign">
                        <p> Sign in</p>
                        <button type ="button">Sign up</button>
                    </div>
                 </div>
           </div> 
    )}
   </div>
   </div>

 )   
}

export default Navbar;