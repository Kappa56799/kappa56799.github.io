import React, { useEffect } from 'react';
import '../index.css';
import '../App.css';

const Cards: React.FC = () => {
  return (
    <>
      <div className="flex h-full w-full text-center flex-col bg-colour2">
        <span className="Spacing"/>
        <p className="text-white text-4xl">Choose What to Click</p>
        <span className="Spacing"/>
        <div className="flex flex-col items-center space-y-8 sm:space-y-0 sm:flex-row sm:justify-center sm:items-center">
          <a href="https://github.com/Kappa56799" className="size shadow-2xl rounded-3xl text-center bg-colour flex justify-center items-center m-2 backdrop">
            <p className="BoldFont text-white text-4xl">GitHub</p>
          </a>
          
          <a href="/blog" className="size shadow-2xl rounded-3xl text-center bg-colour flex justify-center items-center backdrop m-2">
            <p className="BoldFont text-white text-4xl">Blog</p>
          </a>
  
          <a href="/about" className="size shadow-2xl rounded-3xl text-center bg-colour flex justify-center items-center backdrop m-2">
            <p className="BoldFont text-white text-4xl">About Me</p>
          </a>
  
          <a href="/contact" className="size shadow-2xl rounded-3xl text-center bg-colour flex justify-center items-center backdrop m-2">
            <p className="BoldFont text-white text-4xl">Contact Me</p>
          </a>
        </div>
        <span className="Spacing"/>
      </div>
    </>
  );
};

export default Cards;
