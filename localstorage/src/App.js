import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Addproduct from './Components/Product/Addproduct';
import Viewproduct from './Components/Product/Viewproduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/hero' element={<Hero/>}/>
       <Route path='/product' element={<Addproduct/>}/>
       <Route path='/view' element={<Viewproduct/>}/>
          </Routes>
          <Footer/>
          </BrowserRouter>
    
    </div>
  );
}

export default App;
