import React from 'react'
import styles from './styles/headerLite.css'
import ButtonCTA from '../ButtonCTA'

export default function HeaderLite() {

  return (
      <div>
          <header className='headerLite'>
              <div className="d-flex flex-row justify-content-between align-items-center align-content-center flex-wrap">
                  <a href=""> <img src={require( '../../assets/images/blanco-MyTinerary.png' ) } alt="logotipo MyTinerary" className="logotipo-headerLite" /> </a>
                   <a href="">  <i className="fa-regular fa-circle-user icono-user-headerLite"></i>  </a> 
              </div>
              <div className="btnHeaderLite">
                     <ButtonCTA />
              </div>
          </header>
      </div>
  )
}

