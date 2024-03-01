import React, { useEffect, useState } from 'react';
import TypingAnimation from './typing';
import '../index.css';
import '../App.css';

const Heading: React.FC = () => {
  const [showHello, setShowHello] = useState<boolean>(false);
  const [showTyping, setShowTyping] = useState<boolean>(false);

  useEffect(() => {
    setShowHello(true);
    const typingAnimationTimeout = setTimeout(() => {
      setShowTyping(true);
    }, 3000); 

    return () => {
      clearTimeout(typingAnimationTimeout);
    };
  });

  return (
    <>
      <div className="wrapper">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="text-6xl xl:text-9xl text-white text-center ">
          {showHello && (
          <div className="hello-text">
              <h1>Hello 👋</h1>
          </div>
          )}
         {showTyping && <TypingAnimation />}
        </div> 
      </div>
    </>
  );
};

export default Heading;
