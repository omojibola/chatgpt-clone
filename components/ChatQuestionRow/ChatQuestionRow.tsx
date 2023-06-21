import { useState } from 'react';
import Image from 'next/image';
import EditIcon from '@/icons/EditIcon';

const ChatQuestionRow = ({ session, text }: any) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
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
          <p>{text?.data()?.text}</p>
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
  );
};

export default ChatQuestionRow;
