import React, { useEffect, useState } from "react";
import "./styles/cityDetails.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonCTA from '../ButtonCTA'

export default function CityDetails() {
  const { id } = useParams();
  const cities =  useSelector( (store) => store.cities.data ); 
  let city = cities.find( (city) => city._id === id );

  return (
    <>
      <section className="container-details">
        <div className="card-details">
          <div className="img-details-container">
            <img src={city.imageURL} alt={city.name} className="img-details" />
          </div>
          <div className="card-description">
            <h3>{city.name}</h3>
            <p className="description">{city.description}</p>
          </div>

          { city.itineraries.length != 0 ?
            <div className="container-itineraries">
              { city.itineraries.map( (iti) => (

                  <div className="itinerary "  key={itinerary._id} >
                        <p>{iti.nameItinerary}  </p>
                        <p>{iti.nameAutor}  </p>
                        <p>{iti.photoAutor}  </p>
                        <p>{iti.precio}  </p>
                        <p>{iti.duracion}  </p>
                        <p>{iti.likes}  </p>

                  </div>

              ) )  }
          </div>
         : " " }

          <div className="hotels">

          </div>


          <ButtonCTA buttonText="Back to explore" buttonLink='/cities' />
        </div>


      </section>
</>
  );
}
