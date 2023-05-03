import React, { useEffect, useState } from "react";
import "./styles/cities.css";
import ButtonCTA from "../ButtonCTA";
import axios from "axios";

export default function Cities(props) {

  let [data, setData] = useState( [{ 
    name: "loading",
    country: "loading",
    description: "",
    imageURL: "https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"}]
    )

  useEffect( ()=> {
      axios.get( "http://localhost:3000/api/cities" )
      .then( json => setData(json.data) )
    } ,
    []   )

  return (
    <>
      <section className=" container-fluid d-flex justify-content-around flex-wrap">
        {data.map((ciudad, index) => (
          <div className="card bg-transparent text-white  mx-3 my-4" style={{ width: "18rem", height: "34rem" }}  key={index} >
            <div className="div-title align-self-center">
              <p className="Card-Title  px-4 py-1 rounded-pill  text-center">
                {ciudad.country}
              </p>
            </div>
            <div className="card-body position-absolute bottom-0">
              <h5 className="card-title">{ciudad.name}</h5>
                <ButtonCTA buttonText="See more" buttonLink={`/cities/${ciudad._id}`} />
            </div>
            <div className="gradiant rounded"></div>
            <img src={ciudad.imageURL} className="image-card rounded " alt="foto de ciudad" />
          </div>
        ))}
      </section>
    </>
  );
}
