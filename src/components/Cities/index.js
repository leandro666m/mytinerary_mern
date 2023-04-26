import React from 'react'
import './styles/cities.css'
import Header from '../Header'
import ButtonCTA from '../ButtonCTA'

export default function Cities() {


  return (
    <section>
      <div className="img-pagconstruccion">
           <ButtonCTA  texto='Home'/>
          <img src={require("../../assets/images/construccion.jpg")} alt="" />
      </div>
    </section> 
  )
}
