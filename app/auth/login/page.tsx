'use client';
import { Logo } from '@/icons';
import './login.scss';
import { signIn } from 'next-auth/react';

const Login = async () => {
  //sign in function
  const googleSignIn = () => {
    try {
      signIn('google');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login-wrapper'>
      <p style={{ marginTop: '24px' }}>
        Please use only google sign in, I have not implemented the others :)
      </p>
      <div className='login-wrapper__logo'>
        <Logo />
      </div>
      <section className='login-wrapper__form-section'>
        <div className='login-wrapper__form-section__widget'>
          <div className='login-wrapper__form-section__widget__form'>
            <header>
              <h1>Welcome back</h1>
            </header>

            <form>
              <div className='input-container'>
                <input
                  type='text'
                  className='text-input'
                  id='email'
                  autoComplete='off'
                  placeholder='Email address'
                />
                <label className='label' htmlFor='email'>
                  Email address
                </label>
              </div>

              <button type='submit' className='login-btn'>
                Continue
              </button>
            </form>
            <div className='alternate-action'>
              <p className='c7f987bb8 c6338b577 c7e6ea1b7'>
                Don't have an account?
                <a className='cad38ddb6 ccef1b889' href='#' aria-label=''>
                  Sign up
                </a>
              </p>
            </div>
            <div className='or-span'>
              <span>Or</span>
            </div>
            <div className='other-btns-wrapper'>
              <button
                className='other-btns-wrapper__btn'
                onClick={googleSignIn}
              >
                <span
                  className='other-btns-wrapper__icon'
                  data-provider='google'
                ></span>
                <span className='other-btns-wrapper__text'>
                  Continue with Google
                </span>
              </button>
              <button className='other-btns-wrapper__btn'>
                <span
                  className='other-btns-wrapper__icon'
                  data-provider='microsoft'
                ></span>
                <span className='other-btns-wrapper__text'>
                  Continue with Microsoft Account
                </span>
              </button>

              <button className='other-btns-wrapper__btn'>
                <span
                  className='other-btns-wrapper__icon'
                  data-provider='apple'
                ></span>
                <span className='other-btns-wrapper__text'>
                  Continue with Apple
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className='i-footer'>
        <a href='#' target='_blank'>
          Terms of use
        </a>{' '}
        |{' '}
        <a href='#' target='_blank'>
          Privacy policy
        </a>
      </footer>
    </div>
  );
};

export default Login;
