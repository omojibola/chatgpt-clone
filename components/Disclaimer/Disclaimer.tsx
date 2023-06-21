'use client';

import { Close } from '@/icons';
import './disclaimer.scss';

const Disclaimer = ({
  close,
  showDisclaimer,
}: {
  close: () => void;
  showDisclaimer: boolean;
}) => {
  return (
    <>
      {showDisclaimer ? (
        <div className='disclaimer'>
          <p>
            This is not affiliated with Open AI, I just built this to improve my
            skills and for educational purposes. The images/logo used are for
            OpenAI
          </p>
          <button onClick={close}>
            <Close />
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Disclaimer;
