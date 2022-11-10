import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import NavBars from './components/NavBars';
import FixturesAndResults from './components/FixturesAndResults/FixturesAndResults'
import Stats from './components/Stats';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import AdminPage from './components/AdminPage';
import Footer from './components/Footer/Footer';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import { useState } from 'react';

function App() {

const [logged, setLogged] = useState('defined')
const [token, setToken] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
      <NavBars/>
      <div className="py-4"> </div>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/far' element={<FixturesAndResults/>}/>
      <Route path='/leaderboard' element={<Leaderboard token={token} setToken={setToken} logged={logged} setLogged={setLogged}/>}/>
      <Route path='/stats' element={<Stats logged={logged} token={token} setToken={setToken} setLogged={setLogged}/>}/>
      <Route path='/sponsors' element={<Sponsors/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/admin' element={<AdminPage setLogged={setLogged} logged={logged} setToken={setToken} token={token}/>}/>
      <Route path='/login' element={<Login setLogged={setLogged} logged={logged} />}/>
      
    </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

