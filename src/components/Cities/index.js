import React from "react";
import { useSelector } from "react-redux";
import "./styles/cities.css";
import ButtonCTA from "../ButtonCTA";

export default function Cities( ) {
  
  const cities =  useSelector( (store) => store.cities.data ); 

  return (
    <>
    { cities ? 
          <section className="section-back container-fluid d-flex justify-content-around flex-wrap">
          {cities.map((ciudad, index) => (
            <div className="card bg-transparent text-white mx-1 my-4" key={index}>

                  <div className="div-title">
                    <p className="city-country"> <b>{ciudad.country}</b> </p>
                  </div>
            
                  <div className="card-body position-absolute bottom-0">
                    <h5 className="city-name">{ciudad.name}</h5>
                    <ButtonCTA buttonText="See more" buttonLink={`/cities/${ciudad._id}`} />
                  </div>
            
                  <div className="gradiant "></div>
                  <img src={ciudad.imageURL} className="image-card" alt="foto de ciudad" />

            </div>
          ))}
        </section>
        
      : <img href="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" /> } 
    </>
  );
}
