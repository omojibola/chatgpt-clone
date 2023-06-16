'use client';
import { useState } from 'react';
import { Light, Limitations, PlusIcon, Thunder, User } from '@/icons';
import './chat.scss';

const page = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [prompt, setPrompt] = useState<string>('');

  ('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');

  function hideSidebar() {
    let sidebar = window.document?.querySelector<HTMLElement>(
      '.chat-wrapper__sidebar'
    );

    if (sidebar === null) {
      return;
    } else {
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
  return (
    <div className='chat-wrapper'>
      <div className='chat-wrapper__sidebar'>
        <nav className='chat-wrapper__sidebar__nav'>
          <div className='chat-wrapper__sidebar__nav__top'>
            <button className='chat-wrapper__sidebar__nav__top__new'>
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
        </div>
      </div>
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
        <section className='chat-wrapper__chat-section__center'>
          <div className='chat-wrapper__chat-section__center__heading'>
            <h1>ChatGPT</h1>
          </div>
          <div className='chat-wrapper__chat-section__center__list'>
            <div className='chat-wrapper__chat-section__center__list__section'>
              <div className='chat-wrapper__chat-section__center__list__section__top'>
                <Light />
                <p>Examples</p>
              </div>

              <ul className='chat-wrapper__chat-section__center__list__section__list'>
                <button
                  className='chat-wrapper__chat-section__center__list__section__btn'
                  role='button'
                >
                  "Explain quantum computing in simple terms →"
                </button>

                <button
                  className='chat-wrapper__chat-section__center__list__section__btn'
                  role='button'
                >
                  "Got any creative ideas for a 10 year old’s birthday? →"
                </button>

                <button
                  className='chat-wrapper__chat-section__center__list__section__btn'
                  role='button'
                >
                  "How do I make an HTTP request in Javascript?"
                </button>
              </ul>
            </div>

            <div className='chat-wrapper__chat-section__center__list__section'>
              <div className='chat-wrapper__chat-section__center__list__section__top'>
                <Thunder />
                <p>Capabilities</p>
              </div>
              <ul className='chat-wrapper__chat-section__center__list__section__list'>
                <button className='chat-wrapper__chat-section__center__list__section__btn'>
                  Remembers what user said earlier in the conversation
                </button>
                <button className='chat-wrapper__chat-section__center__list__section__btn'>
                  Allows user to provide follow-up corrections
                </button>

                <button className='chat-wrapper__chat-section__center__list__section__btn'>
                  Trained to decline inappropriate requests
                </button>
              </ul>
            </div>

            <div className='chat-wrapper__chat-section__center__list__section'>
              <div className='chat-wrapper__chat-section__center__list__section__top'>
                <Limitations />
                <p>Limitation</p>
              </div>
              <ul className='chat-wrapper__chat-section__center__list__section__list'>
                <button className='chat-wrapper__chat-section__center__list__section__btn'>
                  May occasionally generate incorrect information
                </button>
                <button className='chat-wrapper__chat-section__center__list__section__btn'>
                  May occasionally produce harmful instructions or biased
                  content
                </button>
                <button className='chat-wrapper__chat-section__center__list__section__btn'>
                  Limited knowledge of world and events after 2021
                </button>
              </ul>
            </div>
          </div>
        </section>
        <footer className='chat-wrapper__chat-section__footer'>
          <form className='chat-wrapper__chat-section__footer__input-wrapper'>
            <div className='chat-wrapper__chat-section__footer__input-wrapper__area'>
              <input
                id='prompt-textarea'
                tabIndex={0}
                data-id='root'
                placeholder='Send a message'
                className=''
                style={{
                  maxHeight: '200px',
                  height: '24px',
                  overflowY: 'hidden',
                }}
                onChange={(e) => setPrompt(e.target.value)}
              />
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
                    stroke-width='2'
                  >
                    <path
                      d='M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z'
                      fill='currentColor'
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
          <div className='chat-wrapper__chat-section__footer__small-text'>
            <span>
              Free Research Preview. ChatGPT may produce inaccurate information
              about people, places, or facts.{' '}
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
  );
};

export default page;
