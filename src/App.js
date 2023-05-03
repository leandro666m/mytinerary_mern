import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import City from "./pages/Cities";
import CityDetail from "./pages/CityDetail";

function App() {
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
