import { Arrowlink, Logo } from '@/icons';
import NavDropdown from '../NavDropdown/NavDropdown';
import './navbar.scss';
import { links } from '@/data';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />

      <div className='navbar__middle'>
        <ul className='navbar__middle__container'>
          {links.map((link) => (
            <li key={link.id} className='navbar__middle__container__li'>
              <NavDropdown link={link.name} items={link.items} />
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar__right'>
        <ul className='navbar__middle__container'>
          <li className='navbar__middle__container__li'>
            <button className='navbar__middle__container__li__btn'>
              {' '}
              <span>Search</span>
            </button>
          </li>
          <li className='navbar__middle__container__li'>
            <button className='navbar__middle__container__li__btn'>
              {' '}
              <span>
                Log in <Arrowlink />
              </span>
            </button>
          </li>

          <li className='navbar__middle__container__li'>
            <button
              className='navbar__middle__container__li__signup'
              style={{
                border: '1px solid var(--color-yellow)',
                color: 'var(--color-yellow)',
              }}
            >
              {' '}
              <span>
                Sign up <Arrowlink />
              </span>
            </button>
          </li>
        </ul>
      </div>

      <div className='navbar__right hide-on-l'>
        <ul className='navbar__middle__container'>
          <li className='navbar__middle__container__li'>
            <button className='navbar__middle__container__li__btn'>
              {' '}
              <span>Menu</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
