import React from 'react'
import styles from './styles/header.css'

export default function Header() {
  return (
      <div>
          <header>
              <div className="d-flex flex-row justify-content-between align-items-center align-content-center flex-wrap">
                  <a href=""> <img src={require( '../../assets/images/blanco-MyTinerary.png' ) } alt="logotipo MyTinerary" className="logotipo" /> </a>
                   <a href="">  <i className="fa-regular fa-circle-user icono-user "></i>  </a> 
              </div>

              <div className="sloganybtns">
                  <h2 >Find your perfect trip, designed by insiders who know and love their citiest.</h2>
                  <button type="button" >Explore Cities</button>

              </div>

          </header>

      </div>
  )
}

