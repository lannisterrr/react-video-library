import { loginService } from '../services/login-service';
import { signupService } from '../services/signup-service';

const logInHandler = async (
  email,
  password,
  setAuth,
  navigate,
  location,
  setFormError
) => {
  try {
    const token = await loginService(email, password);
    localStorage.setItem('token', token);
    localStorage.setItem('isAuth', true);
    setAuth({ token, isAuth: true });
    navigate(location?.state?.from?.pathname);
  } catch (e) {
    setFormError(true);
    setTimeout(() => setFormError(false), 2000);
    console.log(e);
  }
};

const signUpHandler = async (
  email,
  password,
  firstName,
  lastName,
  setAuth,
  navigate,
  location
) => {
  try {
    const token = await signupService(email, password, firstName, lastName);
    localStorage.setItem('token', token);
    localStorage.setItem('isAuth', true);
    setAuth({ token, isAuth: true });
    navigate(location?.state?.from?.pathname);
  } catch (error) {
    console.log(error);
  }
};

export { logInHandler, signUpHandler };
