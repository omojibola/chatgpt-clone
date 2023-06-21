import { PlusIcon, ThreeDots, User } from '@/icons';
import Image from 'next/image';
import { db } from '@/firebase';
import React from 'react';
import {
  addDoc,
  collection,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Comment } from '@/icons';
import ChatHistoryRow from '../ChatHistoryRow/ChatHistoryRow';

const Sidebar = ({ hideSidebar }: { hideSidebar: () => void }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session.user?.email!, 'chats'),
        orderBy('createdAt', 'asc')
      )
  );

  //create new chat
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),
      {
        userId: session?.user?.email,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div className='chat-wrapper__sidebar'>
      <nav className='chat-wrapper__sidebar__nav'>
        <div className='chat-wrapper__sidebar__nav__top'>
          <button
            className='chat-wrapper__sidebar__nav__top__new'
            onClick={createNewChat}
          >
            <PlusIcon />
            New chat
          </button>
          <span className='' data-state='closed'>
            <button
              className='chat-wrapper__sidebar__nav__top__new'
              onClick={() => hideSidebar()}
            >
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='2'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-4 w-4'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
                <line x1='9' y1='3' x2='9' y2='21'></line>
              </svg>
              <span
                style={{
                  position: 'absolute',
                  border: ' 0px',
                  width: ' 1px',
                  height: '1px',
                  padding: ' 0px',
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0px, 0px, 0px, 0px)',
                  whiteSpace: 'nowrap',
                  overflowWrap: 'normal',
                }}
              >
                Hide sidebar
              </span>
            </button>
          </span>
        </div>
      </nav>
      <div className='chat-wrapper__sidebar__history'>
        {chats?.docs.map((chat) => (
          <ChatHistoryRow id={chat.id} key={chat.id} />
        ))}
      </div>
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
    </div>
  );
};

export default Sidebar;
