'use client';

import ReactTyped from 'react-typed';
import { gsap } from 'gsap';
import './textrevealloop.scss';

const TextRevealLoop = () => {
  const words = ['Jesse.', 'A Father.', 'A Husband.', 'A Developer.'];

  let cursor = gsap.to('.cursor', {
    opacity: 0,
    ease: 'power2.inOut',
    repeat: -1,
  });
  let masterTl = gsap.timeline({ repeat: -1 }).pause();
  let boxTl = gsap.timeline();

  boxTl
    .to('.box', {
      duration: 1,
      width: '17vw',
      delay: 0.5,
      ease: 'power4.inOut',
    })
    .from('.hi', { duration: 1, y: '7vw', ease: 'power3.out' })
    .to('.box', {
      duration: 1,
      height: '7vw',
      ease: 'elastic.out',
      onComplete: () => masterTl.play(),
    })
    .to('.box', {
      duration: 2,
      autoAlpha: 0.7,
      yoyo: true,
      repeat: -1,
      ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
    });
  words.forEach((word) => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    tl.to('.text', { duration: 1, text: word });
    masterTl.add(tl);
  });
  return (
    <div className='hero-container'>
      {/* <ReactTyped
        // typedRef={typedRef()}
        className='hero-container__text'
        loop
        typeSpeed={50}
        backSpeed={80}
        strings={["Let's create", "Let's brainstorm", "Let's go", 'ChatGPT']}
        smartBackspace
        shuffle={false}
        backDelay={1200}
        fadeOut={false}
        fadeOutDelay={1000}
        loopCount={0}
        showCursor
        cursorChar={'●'}
      /> */}

      <h1>
        <span className='box'></span>
        <span className='hi'>Hi, I'm</span>
        <span className='text'></span>
        <span className='cursor'>_</span>
      </h1>
    </div>
  );
};

export default TextRevealLoop;
