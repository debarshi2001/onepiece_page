
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom"
import Luffy from './Components/Luffy';
import Zoro from './Components/Zoro';
import Sanji from './Components/Sanji';
import Nami from './Components/Nami';
import Ussop from './Components/Ussop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Luffy />} />
          <Route path="/zoro" element={<Zoro />} />
          <Route path="/sanji" element={<Sanji />} />
          <Route path="/nami" element={<Nami />} />
          <Route path="/ussop" element={<Ussop />} />
        </Routes>
        <div>
         <i className='btn'> <Link to='/'>Luffy</Link></i>
         <i className='btn'> <Link to='zoro'>Zoro</Link></i>
         <i className='btn'> <Link to='sanji'>Sanji</Link></i>
         <i className='btn'> <Link to='nami'>Nami</Link></i>
         <i className='btn'> <Link to='ussop'>Ussop</Link></i>

        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
