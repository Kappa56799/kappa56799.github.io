import React, { useState, useEffect } from 'react';
import '../App.css'; 
import '../index.css';

const TypingAnimation: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [displayText, setDisplayText] = useState<string>('');

  useEffect(() => {
    const typedText = "Welcome to my Website!"; 
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < typedText.length) {
        const currentChar = typedText[currentIndex];
        setText(prevText => prevText + currentChar);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); 

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setDisplayText(prevText => prevText === '|' ? '' : '|');
    }, 500); 

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="typing-animation text-white text-center text-2xl">
      <h1 className="typing-animation">{text}<span className="blinking-cursor">{displayText}</span></h1>
    </div>
  );
};

export default TypingAnimation;

