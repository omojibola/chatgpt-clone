'use client';

import './chatsection.scss';
import Image from 'next/image';
import { useState } from 'react';
import { Clipboard, DislikeIcon, LikeIcon } from '@/icons';
import { TextRevealLoop } from '..';
import ChatQuestionRow from '../ChatQuestionRow/ChatQuestionRow';

const ChatSection = ({ session, texts }: any) => {
  let last = texts ? texts[Number(texts?.length) - 1] : 0;
  return (
    <div>
      {texts?.map((text: any) => (
        <div key={text.id} className='chat-section'>
          <ChatQuestionRow session={session} text={text} />

          <div className='chat-section__response'>
            <div className='chat-section__question__wrap'>
              <div className='chat-section__question__container'>
                <Image
                  width={30}
                  height={30}
                  src={'https://links.papareact.com/89k'}
                  alt='profile picture'
                  className='chat-section__question__container__img'
                />

                {last?.data()?.response === text?.data()?.response ? (
                  <TextRevealLoop
                    text={text?.data()?.response?.replace('<br/>', '\n')}
                  />
                ) : (
                  <p>{text?.data()?.response?.replace('<br/>', '\n')}</p>
                )}
                {/* <p>{text?.data()?.response?.replace('<br/>', '\n')}</p> */}
              </div>
              <div className='chat-section__response__icons'>
                <button className='chat-section__question__wrap__edit'>
                  <Clipboard />
                </button>
                <button className='chat-section__question__wrap__edit'>
                  <LikeIcon />
                </button>
                <button className='chat-section__question__wrap__edit'>
                  <DislikeIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='chat-section__question' style={{ height: '150px' }}>
        <div className='chat-section__question__wrap'>
          <div className='chat-section__question__container'></div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
