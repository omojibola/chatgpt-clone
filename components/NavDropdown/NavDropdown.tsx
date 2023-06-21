'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Arrowlink, DownArrow, UpArrow } from '@/icons';
import './navdropdown.scss';

type Iprops = {
  link: string;
  items: string[] | null;
};
const NavDropdown = ({ link, items }: Iprops) => {
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
        {active ? <UpArrow /> : items ? <DownArrow /> : ''}
      </button>
      <div className='dropdown-container__dropdown'>
        {active &&
          items?.map((el) => (
            <div key={el}>
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
