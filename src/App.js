
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
          <Route path="/onepiece_page/luffy" element={<Luffy />} />
          <Route path="/onepiece_page/zoro" element={<Zoro />} />
          <Route path="/onepiece_page/sanji" element={<Sanji />} />
          <Route path="/onepiece_page/nami" element={<Nami />} />
          <Route path="/onepiece_page/ussop" element={<Ussop />} />
        </Routes>
        <div>
         <i className='btn'> <Link to='onepiece_page/luffy'>Luffy</Link></i>
         <i className='btn'> <Link to='onepiece_page/zoro'>Zoro</Link></i>
         <i className='btn'> <Link to='onepiece_page/sanji'>Sanji</Link></i>
         <i className='btn'> <Link to='onepiece_page/nami'>Nami</Link></i>
         <i className='btn'> <Link to='onepiece_page/ussop'>Ussop</Link></i>

        </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
