
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Bloges from './components/Bloges/Bloges';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';

import Nav from './components/Nav/Nav';
import Notfound from './components/Notfound/Notfound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1>Root Page</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/bloges" element={<Bloges></Bloges>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
