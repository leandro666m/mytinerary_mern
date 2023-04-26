import React from 'react'
import styles from './styles/header.css'
import ButtonCTA from '../ButtonCTA'

export default function Header(props) {

  return (
      <div>
          <header>
              <div className="d-flex flex-row justify-content-between align-items-center align-content-center flex-wrap">
                  <a href=""> <img src={require( '../../assets/images/blanco-MyTinerary.png' ) } alt="logotipo MyTinerary" className="logotipo" /> </a>
                   <a href="">  <i className="fa-regular fa-circle-user icono-user "></i>  </a> 
              </div>

              <div className="sloganybtns">
                  <h2 >Find your perfect trip, designed by insiders who know and love their citiest.</h2>
                 {/*  <LinkRouter to='/cities'> <button type="button" id="btnCities" >Explore Cities</button> </LinkRouter> */}
                     <ButtonCTA  texto={'Explore Cities'}/>   {/* <ButtonCTA  texto={'Explore '}/> */}

              </div>

          </header>

      </div>
  )
}

