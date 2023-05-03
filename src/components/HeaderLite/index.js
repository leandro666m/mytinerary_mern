import React from 'react'
import { useLocation } from "react-router-dom";
import './styles/headerLite.css'
import ButtonCTA from '../ButtonCTA'

export default function HeaderLite() {
    const location = useLocation();
    const buttonLink = location.pathname.includes("/cities/") ? "/cities" : "/";
  return (
      <div>
          <header className='headerLite'>
              <div className="d-flex flex-row justify-content-between align-items-center align-content-center flex-wrap">
                  <a href="/"> <img src={require( '../../assets/images/blanco-MyTinerary.png' ) } alt="logotipo MyTinerary" className="logotipo-headerLite" /> </a>
                   <a href="/">  <i className="fa-regular fa-circle-user icono-user-headerLite"></i>  </a> 
              </div>
              <div className="btnHeaderLite">
              <ButtonCTA buttonText="Back to home" buttonLink={buttonLink} />
              </div>
          </header>
      </div>
  )
}

