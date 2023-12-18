import { createContext, useState } from "react";

import { useNavigate} from 'react-router-dom';

import * as authService from '../services/authService';
import Path from '../path';

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');
        return {};
    });
    
    const [showRegisterError, setShowRegisterError] = useState('');
    
    const [showLoginError, setShowLoginError] = useState('');
    
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
        setShowLoginError(error.message);
      }
    };
    
    const registerSubmitHandler = async ({email, password, confirmPassword}) => {
      try{
        if(password !== confirmPassword){
            throw Error('Password missmatch!');
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
        setShowRegisterError(error.message);
      }
    };
    
    const logoutHandler = () => {
        setAuth({});
    
        localStorage.removeItem('accessToken');
    };
    
    const values ={
      loginSubmitHandler,
      showLoginError,
      registerSubmitHandler,
      showRegisterError,
      logoutHandler,
      email: auth.email,
      _id: auth._id,
      isAuthenticated: !!auth.accessToken
    };

    return (
        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;