import React from 'react'
import { useLocation } from "react-router-dom";
import './styles/headerLite.css'
import ButtonCTA from '../ButtonCTA'

export default function HeaderLite() {
    const location = useLocation();
    
    let buttonLink="";        
    let buttonText ="";
    if(location.pathname.endsWith("/cities") ){
         buttonLink = "/"
         buttonText = "Back to home"
    }else{
         buttonLink = "/cities"
        buttonText = "Back to explore"
    }
  return (
      <div>
          <header className='headerLite'>
              <div className="d-flex flex-row justify-content-between align-items-center align-content-center flex-wrap">
                  <a href="/"> <img src={require( '../../assets/images/blanco-MyTinerary.png' ) } alt="logotipo MyTinerary" className="logotipo-headerLite" /> </a>
                   <a href="/">  <i className="fa-regular fa-circle-user icono-user-headerLite"></i>  </a> 
              </div>
              <div className="btnHeaderLite">
              <ButtonCTA buttonText={buttonText} buttonLink={buttonLink} />
              </div>
          </header>
      </div>
  )
}

