import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Carousel from './components/Carousel'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />  {/* fijo */}

          <Routes>    {/* acorde a la ruta */}
            <Route  path={'/'} element={<Home/>} /> 

            <Route  path={'*'} element={<h1> No funcaaa </h1>} />
          </Routes>

       <Footer/>   {/* fijo */}
    </>
  );
}

export default App;
