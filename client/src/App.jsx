import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import PostCreate from './components/post-create/PostCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import PostDetails from './components/post-details/PostDetails';
import PostEdit from './components/post-edit/PostEdit';
import { useState } from 'react';
import AuthContext from './contexts/authContext';

function App() {
const [auth, setAuth] = useState({});

const loginSubmitHandler = (formValues) => {
  console.log(formValues);
};

  return (
    <AuthContext.Provider value = {{loginSubmitHandler}}>
    <>
      < Header />
      < Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path='/catalog' element = {<Catalog/>}></Route>
          <Route path='/post/create' element = {<PostCreate/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path = '/register' element = {<Register/>}></Route>
          <Route path = '/posts/:postId' element = {<PostDetails/>}></Route>
          <Route path='/posts/:postId/edit' element = {<PostEdit/>}></Route>
      </Routes>
      <Footer />
    </>
    </AuthContext.Provider>
  )
}

export default App
