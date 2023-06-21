import { useState } from 'react';
import Hamburger from '@/icons/Hamburger';
import './mobilenav.scss';
import { PlusIcon } from '@/icons';
import SidebarDrawer from '../Drawer/SidebarDrawer';

const Mobilenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <SidebarDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <div className='m-nav'>
        <button className='m-nav__btn'>
          <Hamburger />
        </button>

        <p>New Chat</p>

        <div>
          <PlusIcon />
        </div>
      </div>
    </>
  );
};

export default Mobilenav;
