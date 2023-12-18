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
import PostDelete from './components/post-delete/PostDelete';
import Logout from './components/logout/Logout';
import Page404 from './components/error/Page404';

function App() {
const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
    return {};
});

const [showError, setShowError] = useState(false);

const navigate = useNavigate();

const loginSubmitHandler = async ({email, password}) => {
  try{
    const result = await authService.login(email, password);

    setAuth({
      accessToken: result.accessToken,
      email: result.email,
      _id: result._id
    });

    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
  }catch(error){
    setShowError(true);
  }
};

const registerSubmitHandler = async ({email, password, confirmPassword}) => {
  try{
    if(password !== confirmPassword){
      throw new Error('Password missmatch!');
    }

    const result = await authService.register(email, password);

    setAuth({
      accessToken: result.accessToken,
      email: result.email,
      _id: result._id
    });

    localStorage.setItem('accessToken', result.accessToken);
    
    navigate(Path.Home);
  }catch(error){
    setShowError(true);
  }
};

const logoutHandler = () => {
    setAuth({});

    localStorage.removeItem('accessToken');
};

const values ={
  loginSubmitHandler,
  registerSubmitHandler,
  logoutHandler,
  showError,
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
          <Route path={Path.PostDelete} element = {<PostDelete/>}></Route>
          <Route path={Path.Login} element = {<Login/>}></Route>
          <Route path = {Path.Register} element = {<Register/>}></Route>
          <Route path = {Path.Logout} element = {<Logout/>}></Route>
          <Route path={Path.Page404} element ={<Page404 />}></Route>
      </Routes>
      <Footer />
    </>
    </AuthContext.Provider>
  )
}

export default App
