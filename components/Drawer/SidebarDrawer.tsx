// import component 👇
import { PlusIcon, ThreeDots, User } from '@/icons';
import Drawer from 'react-modern-drawer';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

//import styles 👇
import 'react-modern-drawer/dist/index.css';

const SidebarDrawer = ({ isOpen, toggleDrawer }: any) => {
  const { data: session } = useSession();
  return (
    <div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla'
      >
        <div>'hello'</div>
        {/* <div className='vchat-wrapper__sidebar'>
          <nav className='chat-wrapper__sidebar__nav'>
            <div className='chat-wrapper__sidebar__nav__top'>
              <button className='chat-wrapper__sidebar__nav__top__new'>
                <PlusIcon />
                New chat
              </button>
            </div>
          </nav>
          <div className='chat-wrapper__sidebar__history'></div>
          <div className='chat-wrapper__sidebar__footer'>
            <button className='chat-wrapper__sidebar__footer__top-btn'>
              <span className='chat-wrapper__sidebar__footer__top-btn__wrapper'>
                <span className='chat-wrapper__sidebar__footer__top-btn__wrapper__user'>
                  <User />
                  <p>Upgrade to Plus</p>
                </span>

                <span className='badge-new'>NEW</span>
              </span>
            </button>

            <button
              className='chat-wrapper__sidebar__footer__top-btn'
              onClick={() => signOut()}
            >
              {session && (
                <span className='chat-wrapper__sidebar__footer__top-btn__wrapper'>
                  <span className='chat-wrapper__sidebar__footer__top-btn__wrapper__user'>
                    <Image
                      src={session?.user?.image!}
                      alt='profile picture'
                      width={20}
                      height={20}
                    />
                    <p>{session?.user?.name}</p>
                  </span>

                  <span className='three-dots'>
                    <ThreeDots />
                  </span>
                </span>
              )}
            </button>
          </div>
        </div> */}
      </Drawer>
    </div>
  );
};

export default SidebarDrawer;
