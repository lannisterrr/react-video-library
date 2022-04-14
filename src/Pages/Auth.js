import { useState, useEffect } from 'react';
import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';
import { useAuth } from '../contexts/auth-context';
function Auth() {
  const { loginState, dispatch } = useAuth();
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    dispatch({ type: 'RESET_FORM' });
  }, [formError]);

  return (
    <main id="login-signup-page">
      <section
        className={`forms__container ${loginState.isActive ? 'active' : ''}`}
      >
        <div className="forms">
          <SignIn formError={formError} setFormError={setFormError} />
          <SignUp formError={formError} setFormError={setFormError} />
        </div>
      </section>
    </main>
  );
}

export { Auth };
