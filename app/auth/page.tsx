'use client';

import { Logo } from '@/icons';
import './auth.scss';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  return (
    <div className='auth'>
      <div className='auth__section'>
        <div className='auth__section__logo'>
          <Logo />
        </div>
        <div className='auth__section__welcome'>Welcome to ChatGPT</div>
        <div className='auth__section__login-text'>
          Log in with your OpenAI account to continue
        </div>
        <div className='auth__section__btn-wrapper'>
          <button
            className='auth__section__btn-wrapper__btn'
            onClick={() => router.push('/auth/login')}
          >
            Login
          </button>
          <button className='auth__section__btn-wrapper__btn'>Sign up</button>
        </div>
      </div>
      <div className='auth__footer'>
        <a
          href='#'
          target='_blank'
          className='mx-3 text-gray-500'
          rel='noreferrer'
        >
          Terms of use
        </a>
        <span className='text-gray-600'>|</span>
        <a
          href='#'
          target='_blank'
          className='mx-3 text-gray-500'
          rel='noreferrer'
        >
          Privacy policy
        </a>
      </div>
    </div>
  );
};

export default page;
