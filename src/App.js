import './App.css';

import PublicPage from './components/Pages/PublicPage/PublicPage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './components/Pages/LoginPage/LoginPage';
import MisPeluchesPage from './components/Pages/MisPeluchesPage/MisPeluchesPage';
import HomePage from './components/Pages/HomePage/HomePage';
import CrearPeluchePage from './components/Pages/CrearPeluchePage/CrearPeluchePage';



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path="/" element={<PublicPage/>}/>
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/mis_peluches" element={<MisPeluchesPage/>}/>
         <Route path="/home" element={<HomePage/>}/>
         <Route path='/crear_peluche' element={<CrearPeluchePage/>}/>
       </Routes>
      </Router>

    </div>
  );
}

export default App;
