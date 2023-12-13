import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './path';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";
import PostCreate from './components/post-create/PostCreate';
import Login from './components/login/Login';
import Register from './components/register/Register';
import PostDetails from './components/post-details/PostDetails';
import PostEdit from './components/post-edit/PostEdit';

function App() {
const [auth, setAuth] = useState({});
const navigate = useNavigate();

const loginSubmitHandler = async ({email, password}) => {
    const result = await authService.login(email, password);

    setAuth({
      accessToken: result.accessToken,
      email: result.email,
      _id: result._id
    });

    navigate(Path.Home);

};

const values ={
  loginSubmitHandler,
  email: auth.email,
  _id: auth._id,
  isAuthenticated: !!auth.accessToken
};

  return (
    <AuthContext.Provider value = {values}>
    <>
      < Header />
      < Routes>
          <Route path = {Path.Home} element = {<Home/>}></Route>
          <Route path={Path.Catalog} element = {<Catalog/>}></Route>
          <Route path={Path.PostCreate} element = {<PostCreate/>}></Route>
          <Route path = {Path.PostDetails} element = {<PostDetails/>}></Route>
          <Route path={Path.PostEdit} element = {<PostEdit/>}></Route>
          <Route path={Path.Login} element = {<Login/>}></Route>
          <Route path = {Path.Register} element = {<Register/>}></Route>
      </Routes>
      <Footer />
    </>
    </AuthContext.Provider>
  )
}

export default App
