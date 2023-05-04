import React, { useEffect, useState } from "react";
import "./styles/cityDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import ButtonCTA from '../ButtonCTA'

export default function CityDetails() {
  const { id } = useParams();
  const [city, setCity] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/cities/${id}`)
      .then((response) => {
        setCity(response.data);
      });
  }, [id]);

  return (
    <section>
      <div className="container card-details">
        <h1>{city.name}</h1>
        <div className="img-details-container">
          <img src={city.imageURL} alt={city.name} className="img-details"/>
        </div>
        <p className="description-details">{city.description}</p>
        <ButtonCTA buttonText="Back to explore" buttonLink='/cities' />
      </div>
    </section>
  );
}
