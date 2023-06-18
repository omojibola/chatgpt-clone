import { Light, Limitations, Thunder } from '@/icons';
import React from 'react';

const ChatDefault = () => {
  return (
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
              May occasionally produce harmful instructions or biased content
            </button>
            <button className='chat-wrapper__chat-section__center__list__section__btn'>
              Limited knowledge of world and events after 2021
            </button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChatDefault;
