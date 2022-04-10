import { loginService } from '../services/login-service';
import { signupService } from '../services/signup-service';

const logInHandler = async (
  email,
  password,
  setAuth,
  navigate,
  setFormError
) => {
  try {
    console.log(email, password);
    const token = await loginService(email, password);

    localStorage.setItem('VideoLibToken', token);
    localStorage.setItem('isAuth', true);
    setAuth({ token, isAuth: true });
    navigate('/');
  } catch (e) {
    setFormError(true);
    setTimeout(() => setFormError(false), 1000);
    console.log(e);
  }
};

const signUpHandler = async (
  firstName,
  lastName,
  email,
  password,
  setAuth,
  navigate
) => {
  try {
    console.log(firstName, lastName, email, password);
    const token = await signupService(email, password, firstName, lastName);
    localStorage.setItem('token', token);
    localStorage.setItem('isAuth', true);
    setAuth({ token, isAuth: true });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

export { logInHandler, signUpHandler };
