import { createContext, useContext, useReducer, useState } from 'react';
import { logInHandler, signUpHandler } from '../utils/auth-util';

const authContext = createContext();
const useAuth = () => useContext(authContext);

const initialState = {
  isActive: false,
  showPassword: false,
  email: '',
  password: '',
  rememberMe: false,
  signUpFirstName: '',
  signUpLastName: '',
  signUpEmail: '',
  signUpPassword: '',
};

const signInReducer = (state, action) => {
  switch (action.type) {
    case 'RESET_FORM':
      return initialState;

    case 'TEXT_INPUT':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case 'SIGN_IN_CHECKBOX':
      return {
        ...state,
        rememberMe: action.payload,
      };
    case 'SWITCH_FORM':
      return {
        ...state,
        isActive: !state.isActive,
      };
    case 'PASSWORD_SHOW':
      return {
        ...state,
        showPassword: !state.showPassword,
      };

    case 'SWITCH_AUTH':
      return {
        ...state,
        isAuth: !state.isAuth,
      };

    case 'FILL_GUEST':
      return {
        ...state,
        email: 'adarshbalika@gmail.com',
        password: 'adarshBalika123',
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const AuthProvider = ({ children }) => {
  const [loginState, dispatch] = useReducer(signInReducer, initialState);
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('videoLibToken');

    if (token) return { token, isAuth: true };

    return { token: '', isAuth: false };
  });
  const contextValue = {
    loginState,
    dispatch,
    signUpHandler,
    logInHandler,
    auth,
    setAuth,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export { AuthProvider, useAuth };
