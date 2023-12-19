import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from 'react-router-dom';


import {AuthProvider} from './contexts/authContext';
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
import AuthGuard from './components/guards/AuthGuard';

function App() {
  return (
    <AuthProvider>
    <>
      < Header />
      < Routes>
          <Route path = {Path.Home} element = {<Home/>}></Route>
          <Route path={Path.Catalog} element = {<Catalog/>}></Route>
          <Route path = {Path.PostDetails} element = {<PostDetails/>}></Route>
          <Route path={Path.Login} element = {<Login />}></Route>
          <Route path = {Path.Register} element = {<Register />}></Route>
          <Route path={Path.Page404} element ={<Page404 />}></Route>

          <Route element={<AuthGuard />}>
          <Route path={Path.PostCreate} element = {<PostCreate/>}></Route>
              <Route path={Path.PostEdit} element = {<PostEdit/>}></Route>
              <Route path={Path.PostDelete} element = {<PostDelete/>}></Route>
              <Route path = {Path.Logout} element = {<Logout/>}></Route>
          </Route>
      </Routes>
      <Footer />
    </>
    </AuthProvider>
  )
}

export default App
