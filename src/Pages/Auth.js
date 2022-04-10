import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';
import { useAuth } from '../contexts/auth-context';
function Auth() {
  const { loginState } = useAuth();
  return (
    <main id="login-signup-page">
      <section
        class={`forms__container ${loginState.isActive ? 'active' : ''}`}
      >
        <div class="forms">
          <SignIn />
          <SignUp />
        </div>
      </section>
    </main>
  );
}

export { Auth };
