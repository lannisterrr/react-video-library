import { Checkbox } from '../components/Checkbox';
import { useAuth } from '../contexts/auth-context';

import { useNavigate, useLocation } from 'react-router-dom';

function SignUp({ formError, setFormError }) {
  const { loginState, dispatch, signUpHandler, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const formSubmitHandler = e => {
    e.preventDefault();
    const letter = /[a-zA-Z]/;
    const number = /[0-9]/;
    const valid =
      number.test(loginState.signUpPassword) &&
      letter.test(loginState.signUpPassword);

    if (valid) {
      signUpHandler(
        loginState.signUpEmail,
        loginState.signUpPassword,
        loginState.signUpFirstName,
        loginState.signUpLastName,
        setAuth,
        navigate,
        location
      );
    } else {
      setFormError(true);
      setTimeout(() => setFormError(false), 2000);
    }
  };

  return (
    <div className="form sign-up">
      <span className="form__title heading-3">Sign up</span>
      <form onSubmit={formSubmitHandler}>
        <div className="input-field">
          <input
            value={loginState.signUpFirstName}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'signUpFirstName', value: event.target.value },
              })
            }
            type="text"
            placeholder="First Name"
            className="form__email-input"
            required
          />
          <i className="uil uil-user form-icon left-icon"></i>
        </div>

        <div className="input-field">
          <input
            value={loginState.signUpLastName}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'signUpLastName', value: event.target.value },
              })
            }
            type="text"
            placeholder="Last Name"
            className="form__email-input"
            required
          />
          <i className="uil uil-user form-icon left-icon"></i>
        </div>

        <div className="input-field">
          <input
            value={loginState.signUpEmail}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'signUpEmail', value: event.target.value },
              })
            }
            type="email"
            placeholder="Enter your email"
            className="form__email-input"
            required
          />
          <i className="uil uil-envelope form-icon left-icon"></i>
        </div>

        <div className="input-field">
          <input
            value={loginState.signUpPassword}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'signUpPassword', value: event.target.value },
              })
            }
            type={loginState.showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            className="form__email-input password"
            required
          />
          <i className="uil uil-lock form-icon left-icon"></i>
        </div>

        <div className="checkbox-container">
          <div className="checkbox-content">
            <Checkbox
              id="signUp-checkbox"
              title="Agree to terms and services"
              booleanChecked={true}
              name="signUp-checkbox"
            />
          </div>
          <a href="#" className="t-c-3 f-6 f-bold forget-password">
            Need help?
          </a>
        </div>

        <div className="input-field button-container">
          <button className="btn btn-danger t-c-1 final-cta w-100 round-corner">
            Sign-Up Now
          </button>
        </div>
      </form>

      <div className="login-signup center-text">
        <span className="f-6">
          Already a member?
          <span
            onClick={() => dispatch({ type: 'SWITCH_FORM' })}
            className="f-6 f-bold form-change-link  t-c-4 p-h-2"
          >
            Sign-in now
          </span>
        </span>
        {formError && (
          <p className="f-7 t-c-3">Password shoulde be alpha numeric</p>
        )}
      </div>
    </div>
  );
}

export { SignUp };
