'use client';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatDefault from '@/components/ChatDefault/ChatDefault';
import ChatSection from '@/components/ChatSection/ChatSection';
import { useCollection } from 'react-firebase-hooks/firestore';
import Mobilenav from '@/components/MobileNav/Mobilenav';
import Sidebar from '@/components/Sidebar/Sidebar';

type dataProps = {
  id: string;
  data: any;
  params: {
    id: string;
  };
};
const page = ({ params: { id } }: dataProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [promptLoading, setPromptLoading] = useState(false);
  const [prompt, setPrompt] = useState<string>('');
  const { data: session } = useSession();

  const [chats] = useCollection(
    session &&
      query(
        collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
        orderBy('createdAt', 'asc')
      )
  );

  function hideSidebar() {
    let sidebar = window.document?.querySelector<HTMLElement>(
      '.chat-wrapper__sidebar'
    );

    if (sidebar === null) {
      return;
    } else {
      sidebar.style.position = 'none';
      sidebar.style.width = '0px';
      sidebar.style.padding = '0px';

      setShowSidebar(false);
    }
  }

  function expandSidebar() {
    let sidebar = window.document?.querySelector<HTMLElement>(
      '.chat-wrapper__sidebar'
    );

    if (sidebar === null) {
      return;
    } else {
      sidebar.style.width = '310px';
      sidebar.style.padding = '0.5rem';
      setShowSidebar(true);
    }
  }

  //ask question
  const askQuestion = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const text = prompt.trim();
    const model = 'gpt-3.5-turbo';

    //toast
    try {
      setPromptLoading(true);
      let res = await axios.post('/api/askQuestion', {
        prompt: text,
        chatId: id,
        model,
        session,
      });
      setPrompt('');
    } catch (error) {
      console.log(error);
    } finally {
      setPromptLoading(false);
    }
  };

  return (
    <>
      <Mobilenav />
      <div className='chat-wrapper'>
        <Sidebar hideSidebar={hideSidebar} />
        <div className='chat-wrapper__chat-section'>
          {!showSidebar && (
            <span className=''>
              <button
                className='chat-wrapper__sidebar__nav__top__new'
                onClick={() => expandSidebar()}
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
              </button>
            </span>
          )}
          {chats?.docs?.length > 0 ? (
            <ChatSection session={session} texts={chats?.docs} />
          ) : (
            <ChatDefault />
          )}

          <footer className='chat-wrapper__chat-section__footer'>
            <form
              className='chat-wrapper__chat-section__footer__input-wrapper'
              onSubmit={askQuestion}
            >
              <div className='chat-wrapper__chat-section__footer__input-wrapper__area'>
                <input
                  id='prompt-textarea'
                  tabIndex={0}
                  data-id='root'
                  placeholder='Send a message'
                  className=''
                  value={prompt}
                  style={{
                    maxHeight: '200px',
                    height: '24px',
                    overflowY: 'hidden',
                  }}
                  onChange={(e) => setPrompt(e.target.value)}
                />

                {promptLoading ? (
                  <img src={'/gear.svg'} alt='' />
                ) : (
                  <button
                    className={`chat-wrapper__chat-section__footer__input-wrapper__area__${
                      prompt ? 'active-btn' : 'btn'
                    }`}
                  >
                    <span className=''>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 16 16'
                        fill='none'
                        className='h-4 w-4 m-1 md:m-0'
                        strokeWidth='2'
                      >
                        <path
                          d='M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z'
                          fill='currentColor'
                        ></path>
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </form>
            <div className='chat-wrapper__chat-section__footer__small-text'>
              <span>
                Free Research Preview. ChatGPT may produce inaccurate
                information about people, places, or facts.{' '}
                <a
                  href='#'
                  target='_blank'
                  rel='noreferrer'
                  className='underline'
                >
                  ChatGPT May 24 Version
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default page;
