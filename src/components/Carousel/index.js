import React from 'react'
import styles from './styles/carousel.css'


export default function Carousel() {
  return (
      <div>
          <section id="carouseles">
              <h1>Popular Mytineraries</h1>
              <div id="carouselExampleFade" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                  <div className="carousel-inner">

                      <div className="carousel-item active d-flex flex-row justify-content-between ">

                          <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                              <img src="https://images.unsplash.com/photo-1682336017038-de632a4ec2b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                  className="d-block w-100 object-fit-cover " alt="..." />
                              <h5>Etiqueta de la primera diapositiva</h5>
                          </div>

                          <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                              <img src="https://images.unsplash.com/photo-1647891937869-bc31fe3f9836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                                  className="d-block  w-100 object-fit-cover " alt="..." />
                              <h5>Etiqueta de la 2da diapositiva</h5>
                          </div>

                          <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                              <img src="https://images.unsplash.com/photo-1682336017038-de632a4ec2b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                  className="d-block  w-100 object-fit-cover " alt="..." />
                              <h5>Etiqueta de la 3ra diapositiva</h5>
                          </div>
                      </div>


                      <div className="carousel-item active d-flex flex-row justify-content-between ">

                          <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                              <img src="https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l1ZGFkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                  className="d-block w-100  object-fit-cover " alt="..." />
                              <h5>Etiqueta de la 1ra diapositiva</h5>
                          </div>

                          <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                              <img src="https://images.unsplash.com/photo-1525095240410-9645dea911e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l1ZGFkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                  className="d-block  w-100  object-fit-cover " alt="..." />
                              <h5>Etiqueta de la 2da diapositiva</h5>
                          </div>

                          <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                              <img src="https://images.unsplash.com/photo-1571951103752-53c15cad28e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l1ZGFkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                  className="d-block  w-100  object-fit-cover " alt="..." />
                              <h5>Etiqueta de la 3ra diapositiva</h5>
                          </div>
                      </div>


                      <div className="carousel-item active d-flex flex-row justify-content-between ">

                          <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                              <img src="https://images.unsplash.com/photo-1516844113229-18646a422956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2l1ZGFkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                  className="d-block w-100  object-fit-cover " alt="..." />
                              <h5>Etiqueta de la 1ra diapositiva</h5>
                          </div>

                          <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                              <img src="https://images.unsplash.com/photo-1618503551238-7df2c50d2236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l1ZGFkZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                                  className="d-block  w-100  object-fit-cover " alt="..." />
                              <h5>Etiqueta de la 2da diapositiva</h5>
                          </div>

                          <div className="carousel-imgtex-container d-flex flex-column align-items-center">
                              <img src="https://images.unsplash.com/photo-1588733103629-b77afe0425ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdWRhZGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                  className="d-block  w-100  object-fit-cover " alt="..." />
                              <h5>Etiqueta de la 3ra diapositiva</h5>
                          </div>
                      </div>
                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Siguiente</span>
                  </button>

              </div>

              <p>If not now, then when? <br /> Travel with us to your next adventure</p>
          </section>

      </div>
  )
}
