import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import City from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import { useDispatch } from "react-redux";
import { fetchCities } from "./redux/slices/city/citySlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( fetchCities() );
  }, [dispatch]);

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
