
import './App.css';
import {Route, Router, RouterProvider, Routes, createBrowserRouter} from "react-router-dom";
import PrimeiroComponente from './Components/PrimeiroComponente';
import SegundoComponente from './Components/SegundoComponent';
import TerceiroComponente from './Components/TerceiroComponente';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<PrimeiroComponente/>}/>
      <Route path="/segundo" element ={<SegundoComponente/>}/>
      <Route path="/terceiro" element = {<TerceiroComponente/>}/>
    </Routes>
    </>

    
    );
}

export default App;
