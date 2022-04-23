import { useState, useEffect } from 'react';

import React from 'react';

import imgSmall from '../images/hero-mobile.jpg';
import imgLarge from '../images/hero-desktop.jpg';

const Image = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);

    window.addEventListener('resize', () =>
      setWindowSize(window.innerWidth)
    );

    console.log(windowSize);
  });

  return (
    <div className="w-screen sm:flex sm:content-center max-w-xl lg:absolute lg:h-screen lg:top-0 lg:right-0 lg:w-[400px] xl:w-[600px]">
      {windowSize < 1024 && (
        <img
          className="mx-auto w-full"
          src={imgSmall}
          alt="girl modeling"
        />
      )}
      {windowSize >= 1024 && (
        <img
          className="object-center object-cover min-h-full"
          src={imgLarge}
          alt="girl modeling"
        />
      )}
    </div>
  );
};

export default Image;
