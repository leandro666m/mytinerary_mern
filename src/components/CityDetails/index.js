import React, { useEffect, useState } from "react";
import "./styles/cityDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonCTA from '../ButtonCTA'
import { filterCityByID } from "../../redux/slices/city/citySlice";


export default function CityDetails() {
  const { id } = useParams(); 
  const dispatch = useDispatch()
  
  let cities = useSelector( (store)=> store.cities.data ) 
  let city = useSelector( (store)=> store.cities.dataFiltered )
  
  useEffect( ()=>{
    if( cities.length > 0){ 
      dispatch( filterCityByID(id) ) }
    }, [cities] ) 
    console.log(city);
    
  return (
    <> { city ?
      <section className="card-back-details container-fluid d-flex justify-content-around flex-wrap">
        <div className="card-details ">
          <div className="img-details-container">
            <img src={city.imageURL} alt={city.name} className="img-details" />
          </div>
          <div className="card-description">
            <h3>{city.name}</h3>
            <p className="description">{city.description}</p>
          </div>
          { city?.itineraries?.length !== 0 ?
            <div className="container-itineraries">
              {city.itineraries?.map((iti) => (
                <div className="itinerary" key={iti._id} >
                  <img src={iti.photoAutor} className="photoAutor" />
                  <p>{iti.nameItinerary}  </p>
                  <p>Autor: {iti.nameAutor}  </p>
                  <p>Value: ${iti.precio}  </p>
                  <p>Duration: {iti.duracion} dias</p>
                  <p><i class="fa-solid fa-heart"></i>{iti.likes}</p>

                  {
                    iti.hashtags.length !== 0 &&
                    <div className="hashtags">
                      {iti.hashtags.map((ht) => (<span key={ht}>{ht} </span>))}
                    </div>
                  }
                </div>
              ))}
            </div>
            : " "}
          <div className="hotels">

          </div>

          <ButtonCTA buttonText="Back to explore" buttonLink='/cities' />
        </div>
      </section>
: null}
</>
  );
}