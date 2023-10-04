import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Villas from './pages/villas/Villas';


function App() {

  return (
<BrowserRouter >
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/stay' element={<Villas />} />
  </Routes>
</BrowserRouter>
  )
}

export default App
