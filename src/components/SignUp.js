import React from 'react';
import { Checkbox } from '../components/Checkbox';
import { useAuth } from '../contexts/auth-context';

import { useNavigate } from 'react-router-dom';

function SignUp() {
  const { loginState, dispatch, signUpHandler, setAuth } = useAuth();
  const navigate = useNavigate();

  const formSubmitHandler = e => {
    e.preventDefault();
    signUpHandler(
      loginState.signUpEmail,
      loginState.signUpPassword,
      loginState.signUpFirstName,
      loginState.signUpLastName,
      setAuth,
      navigate
    );
  };

  return (
    <div class="form sign-up">
      <span class="form__title heading-3">Sign up</span>
      <form onSubmit={formSubmitHandler}>
        <div class="input-field">
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
            class="form__email-input"
            required
          />
          <i class="uil uil-user form-icon left-icon"></i>
        </div>

        <div class="input-field">
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
            class="form__email-input"
            required
          />
          <i class="uil uil-user form-icon left-icon"></i>
        </div>

        <div class="input-field">
          <input
            value={loginState.signUpEmail}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'signUpEmail', value: event.target.value },
              })
            }
            type="text"
            placeholder="Enter your email"
            class="form__email-input"
            required
          />
          <i class="uil uil-envelope form-icon left-icon"></i>
        </div>

        <div class="input-field">
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
            class="form__email-input password"
            required
          />
          <i class="uil uil-lock form-icon left-icon"></i>
        </div>

        <div class="checkbox-container">
          <div class="checkbox-content">
            <Checkbox
              id="signUp-checkbox"
              title="Agree to terms and services"
              booleanChecked={true}
              name="signUp-checkbox"
            />
          </div>
          <a href="#" class="t-c-3 f-6 f-bold forget-password">
            Need help?
          </a>
        </div>

        <div class="input-field button-container">
          <button class="btn btn-danger t-c-1 final-cta w-100 round-corner">
            Sign-Up Now
          </button>
        </div>
      </form>

      <div class="login-signup center-text">
        <span class="f-6">
          Already a member?
          <span
            onClick={() => dispatch({ type: 'SWITCH_FORM' })}
            class="f-6 f-bold form-change-link  t-c-4 p-h-2"
          >
            Sign-in now
          </span>
        </span>
      </div>
    </div>
  );
}

export { SignUp };
