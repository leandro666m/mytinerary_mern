import React, { useEffect, useState } from "react";
import "./styles/cities.css";
import Header from "../Header";
import ButtonCTA from "../ButtonCTA";
import axios from "axios";

let conjuntoCiudades = [
  {
    name: "Buenos Aires",
    country: "Argentina",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipiscing elit ornare tempus.",
    imageURL:
      "https://c8.alamy.com/compes/2atf0nr/buenos-aires-argentina-febrero-20-2016-obelisco-de-buenos-aires-obelisco-panorama-vertical-de-la-plaza-de-la-republica-en-las-avenidas-corrientes-an-2atf0nr.jpg",
  },
  {
    name: "Washington DC",
    country: "Estados Unidos",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipiscing elit ornare tempus.",
    imageURL:
      "https://es.wikiarquitectura.com/wp-content/uploads/2017/07/793px-Washington_Monument_2012-793x1024.jpg",
  },
  {
    name: "Madrid",
    country: "Espania",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipiscing elit ornare tempus.",
    imageURL:
      "https://media.vogue.mx/photos/5c070fa0676a2333766f1cc9/1:1/w_2575,h_2575,c_limit/madrid_212.jpg",
  },
  {
    name: "Berlin",
    country: "Alemania",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipiscing elit ornare tempus.",
    imageURL:
      "https://www.berlin.de/binaries/asset/image_assets/5719603/ratio_4_3/1595328732/800x600/",
  },
  {
    name: "Santiago de Chile",
    country: "argentina",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipiscing elit ornare tempus.",
    imageURL: "https://www.diarioestrategia.cl/images/showid/1926084",
  },
];

export default function Cities() {

  let [data, setData] = useState( [{ 
        name: "ER",
        country: "Argentina",
        description: "Todos los verdes",
        imageURL: "htttp:"}]
        )
  
  useEffect( ()=> {
      axios.get( "http://localhost:3000/api/cities" )
      .then( json => { 
                setData(json.data);
                console.log( json.data );
              }
          )
                
    } ,
    [] 
  )
/*
  useEffect( ()=> {
    axios.post( "http://localhost:3000/api/cities?id:fdsfadsa", { "name": "cdsacs", } )
    .then( response => console.log(response.data) )
  } ,
  [] 
  )
*/

  return (
    <>
      <section className="container-fluid d-flex justify-content-around flex-wrap">
        {data.map((ciudad, index) => (
          <div className="card bg-transparent text-white  mx-3 my-4" style={{ width: "18rem", height: "34rem" }} key={index} >
            <div className="div-title align-self-center">
              <p className="Card-Title  px-4 py-1 rounded-pill  text-center">
                {ciudad.country}
              </p>
            </div>
            <div className="card-body position-absolute bottom-0">
              <h5 className="card-title">{ciudad.name}</h5>
              <p className="card-text">{ciudad.description}</p>
              <a href="#" className=" btn-card ">
                Go somewhere
              </a>
            </div>
            <div className="gradiant rounded"></div>
            <img src={ciudad.imageURL} className="image-card rounded " />
          </div>
        ))}
      </section>
    </>
  );
}
