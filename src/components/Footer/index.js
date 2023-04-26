import React from 'react'
import './styles/footer.css'
import logo from '../../assets/images/blanco-MyTinerary.png'


export default function Footer() {
  return (
    <div>
        <footer className=" d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
            <div className="col mb-3 d-flex flex-column text-decoration-none">
                
                <a href="" className="d-flex mb-3 text-decoration-none">
                        <img src={logo} alt="logotipo MyTinerary" className="logotipo-footer" /> 
                </a>

                <div className="d-flex mt-md-5">
                    <i className="fa-brands fa-facebook mx-1 fs-2"></i>
                    <i className="fa-brands fa-instagram mx-1 fs-2"></i>
                    <i className="fa-brands fa-youtube mx-1 fs-2"></i>
                    <i className="fa-brands fa-twitter mx-1 fs-2"></i>
                </div>
            </div>

            <div className="col mb-3">
            </div>

            <div className="col mb-3 ps-3 footer-sections">
                <h5>Sections</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Explore Cities</a></li>
                </ul>
            </div>
            <div className="col mb-3 ps-3  footer-sections">
                <h5>Disclaimer</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Terms and Conditions</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Privacy Policy</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Cookie Policy</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Acceptable Use Policy</a></li>
                </ul>
            </div>
            <div className="col mb-3 ps-3  footer-sections">
                <h5>About developers <br/> © 2023</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "> <i class="fa-brands fa-github"></i><small>  leandro666m </small></a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">  <i class="fa-brands fa-github"></i><small>leandrito12 </small></a></li>
                </ul>
            </div>
            
        </footer>

    </div>
  )
}
