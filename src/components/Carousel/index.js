import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from './styles/carousel.css'

export default function Carousel() {

    const cities = useSelector((store) => store.cities.data);
    const randomIndex1 = Math.floor(Math.random() * cities.length);
    const randomIndex2 = Math.floor(Math.random() * cities.length);
    const randomIndex3 = Math.floor(Math.random() * cities.length);
   
return ( 
    <>
    { cities.length > 0 ? 

        <section id="carouseles">
            <h1>Popular Mytineraries</h1>
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="true" data-bs-touch="true">
                <div className="carousel-inner">

                    <div className="carousel-item active d-flex flex-row justify-content-between ">

                        <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                            <img src={cities[randomIndex1].imageURL} className="d-block w-100 object-fit-cover " alt="..." />
                            <h5> <a href={`/cities/${cities[randomIndex1]._id}`}>   {cities[randomIndex1].name}  </a></h5> 
                        </div>

                        <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                            <img src={cities[randomIndex2].imageURL} className="d-block  w-100 object-fit-cover " alt="..." />
                            <h5> <a href={`/cities/${cities[randomIndex2]._id}`}> {cities[randomIndex2].name}  </a></h5> 
                        </div>

                        <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                            <img src={cities[randomIndex3].imageURL} className="d-block  w-100 object-fit-cover " alt="..." />
                            <h5> <a href={`/cities/${cities[randomIndex3]._id}`}>  {cities[randomIndex3].name} </a> </h5> 
                        </div>
                    </div>

                     <div className="carousel-item d-flex flex-row justify-content-between ">

                        <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                            <img src={cities[randomIndex1].imageURL} className="d-block w-100 object-fit-cover " alt="..." />
                            <h5> <a href={`/cities/${cities[randomIndex1]._id}`}>   {cities[randomIndex1].name}  </a></h5> 
                        </div>

                        <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                            <img src={cities[randomIndex2].imageURL} className="d-block  w-100 object-fit-cover " alt="..." />
                            <h5> <a href={`/cities/${cities[randomIndex2]._id}`}> {cities[randomIndex2].name}  </a></h5> 
                        </div>

                        <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                            <img src={cities[randomIndex3].imageURL} className="d-block  w-100 object-fit-cover " alt="..." />
                            <h5> <a href={`/cities/${cities[randomIndex3]._id}`}>  {cities[randomIndex3].name} </a> </h5> 
                        </div>
                    </div>


                    <div className="carousel-item  d-flex flex-row justify-content-between ">

                        <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                            <img src={cities[randomIndex1].imageURL} className="d-block w-100 object-fit-cover " alt="..." />
                            <h5> <a href={`/cities/${cities[randomIndex1]._id}`}>   {cities[randomIndex1].name}  </a></h5> 
                        </div>

                        <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                            <img src={cities[randomIndex2].imageURL} className="d-block  w-100 object-fit-cover " alt="..." />
                            <h5> <a href={`/cities/${cities[randomIndex2]._id}`}> {cities[randomIndex2].name}  </a></h5> 
                        </div>

                        <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                            <img src={cities[randomIndex3].imageURL} className="d-block  w-100 object-fit-cover " alt="..." />
                            <h5> <a href={`/cities/${cities[randomIndex3]._id}`}>  {cities[randomIndex3].name} </a> </h5>
                        </div>
                    </div> 

                </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

            </div>
        <p>If not now, then when? <br /> Travel with us to your next adventure</p>
        </section>

: "" }
</>
);
}