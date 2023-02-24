
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbars from './component/navbar/navbar';
import Home from './component/home/home';
import { Video } from './component/data/videos';
import { Login } from './component/login/login';
import { Register } from './component/register/register';



function App() {
  return (
<>
<div>
<Navbars />
<BrowserRouter>
  <Routes>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/video' element={<Video />}></Route>
  </Routes>
</BrowserRouter>
</div>
</>
  );
}

export default App;
