import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import City from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setCities } from "./redux/slices/city/citySlice";

function App() {
  const dispatch = useDispatch();

useEffect(   ()=>{ 
        axios.get("http://localhost:3000/api/cities").then( (res) => {  
          dispatch( setCities( res.data ) )
        } ).catch() 
  }
)

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cities"} element={<City />} />
        <Route path={"/cities/:id"} element={<CityDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
