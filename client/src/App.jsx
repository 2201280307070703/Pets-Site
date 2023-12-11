import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";

function App() {

  return (
    <>
      < Header />
      < Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path='/catalog' element = {<Catalog/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
