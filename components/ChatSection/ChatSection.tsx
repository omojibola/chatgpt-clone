'use client';
import EditIcon from '@/icons/EditIcon';
import './chatsection.scss';
import Image from 'next/image';
import { useState } from 'react';
import { Clipboard, DislikeIcon, LikeIcon } from '@/icons';
import { TextRevealLoop } from '..';

const ChatSection = ({ session, texts }: any) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  let last = texts ? texts[Number(texts?.length) - 1] : 0;
  return (
    <div>
      {texts?.map((text: any) => (
        <div key={text.id} className='chat-section'>
          <div
            className='chat-section__question'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className='chat-section__question__wrap'>
              <div className='chat-section__question__container'>
                <Image
                  width={30}
                  height={30}
                  src={session?.user?.image!}
                  alt='profile picture'
                  className='chat-section__question__container__img'
                />
                <p>{text?.data()?.question?.text}</p>
              </div>

              <button
                className='chat-section__question__wrap__edit'
                style={{
                  background: hover ? '#40414F' : '',
                  display: hover ? 'block' : 'none',
                }}
              >
                <EditIcon />
              </button>
            </div>
          </div>

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

                {last?.data()?.chatgptRes?.text ===
                text?.data()?.chatgptRes?.text ? (
                  <TextRevealLoop
                    text={text
                      ?.data()
                      ?.chatgptRes?.text?.replace('<br/>', '\n')}
                  />
                ) : (
                  <p>
                    {text?.data()?.chatgptRes?.text?.replace('<br/>', '\n')}
                  </p>
                )}
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
