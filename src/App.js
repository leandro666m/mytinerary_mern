import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Carousel from './components/Carousel'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import City from './pages/Cities';
import ButtonCTA from './components/ButtonCTA';



function App() {
  
  return (
    <>

          <Routes>    {/* acorde a la ruta */}
            <Route  path={'/'} element={<Home/>}  /> 
            <Route  path={'/cities'} element={<City/>}  /> 
            <Route  path={'*'} element={<h1> No funcaaa </h1>} /> 
          </Routes>

       <Footer/>   {/* fijo */}
    </>
  );
}

export default App;
