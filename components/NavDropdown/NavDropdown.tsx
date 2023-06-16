'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Arrowlink, DownArrow, UpArrow } from '@/icons';
import './navdropdown.scss';

type Iprops = {
  link: string;
  children: string[] | null;
};
const NavDropdown = ({ link, children }: Iprops) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className='dropdown-container'>
      <button
        className='navbar__middle__container__li__btn'
        onClick={() => setActive(!active)}
      >
        {' '}
        <span
          style={{
            textDecoration: active ? 'underline' : '',
            textUnderlineOffset: '4px',
          }}
        >
          {link}
        </span>
        {active ? <UpArrow /> : children ? <DownArrow /> : ''}
      </button>
      <div className='dropdown-container__dropdown'>
        {active &&
          children?.map((el) => (
            <div>
              <Link href={'/'}>
                <span className='dropdown-container__dropdown__link'>
                  <span>{el}</span>

                  <Arrowlink />
                </span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NavDropdown;
