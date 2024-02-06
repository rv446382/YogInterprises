
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NavbarMain from './components/NavbarMain';
import NavbarTop from './components/NavbarTop';
import Service from './Pages/Service';
import Careers from './Pages/Careers';
import Production from './Pages/Production';
import Details from './detailsPage/Details';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <NavbarMain />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/production' element={<Production />} />
        <Route path="/product/:id" component={<Details />} />
      </Routes>

    </div>
  );
}

export default App;
