import React, { useEffect, useState } from "react";
import "./styles/cityDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonCTA from "../ButtonCTA";
import { filterCityByID } from "../../redux/slices/city/citySlice";

export default function CityDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  let cities = useSelector((store) => store.cities.data);
  let city = useSelector((store) => store.cities.dataFiltered);

  useEffect(() => {
    if (cities.length > 0) {
      dispatch(filterCityByID(id));
    }
  }, [cities]);

  return (
    <>
      {" "}
      {city ? (
        <section className="card-back-details container-fluid d-flex justify-content-around flex-wrap">
          <div className="card-details w-100">
            <div className="img-details-container">
              <img src={city.imageURL} alt={city.name} className="img-details" />
            </div>

            <div className="card-description rounded opacity-75">
              <h3>{city.name}</h3>
              <p className="description">{city.description}</p>
            </div>

            {city?.itineraries?.length !== 0 ? (
              <div className="container-itineraries">
                <h2 className="titulo-seccion">Best Itiniraries</h2>
                {city.itineraries?.map((iti) => (
                  <div className="itinerary" key={iti._id}>
                    <div className="card-encabezado">
                        <img src={iti.photoAutor} className="photoAutor" alt="..."/>
                    </div>
                        <p className="likes"> <small><i className="fa-solid fa-heart"> </i>{iti.likes} likes</small></p>
                    <div className="card-cuerpo">
                        <h4 className="nameIti">{iti.nameItinerary} </h4>
                        <h5>Autor: {iti.nameAutor} </h5>
                        <p>Value: ${iti.precio} </p>
                        <p>Duration: {iti.duracion} dias</p>
                        {iti.hashtags.length !== 0 && (
                          <div className="hashtags">
                            {iti.hashtags.map((ht) => (
                              <span key={ht}>{ht} </span> ))}
                          </div>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            ) : " " }

            {city?.hotels?.length !== 0 ? (
              <div className="container-hoteles">
                <h2 className="titulo-seccion">Best Hotels</h2>
                {city.hotels?.map((hotel) => (
                  <div className="hotel" key={hotel._id}>
                    <div className="card-encabezado-hotel">
                        <img src={hotel.imageURL} className="imgHotel" alt="..."/>
                    </div>

                    <div className="card-cuerpo-hotel">
                        <h4 className="nameHotel">{hotel.name} </h4>
                        <p>{hotel.description} </p>
                    </div>
                  </div>
                ))}
              </div>
            ) :  " "}

            <ButtonCTA buttonText="Back to explore" buttonLink="/cities" />
          </div>
        </section>
      ) : null}
    </>
  );
}
