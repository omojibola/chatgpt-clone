'use client';

import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text?.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 20); // Adjust typing speed here (in milliseconds)
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return <p>{displayText}</p>;
};

export default TypewriterEffect;
