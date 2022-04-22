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
    <section className="w-full lg:max-w-5xl">
      {windowSize < 1024 && (
        <img
          className="w-full lg:h-full lg:object-cover"
          src={imgSmall}
          alt="girl modeling"
        />
      )}
      {windowSize >= 1024 && (
        <img
          className="min-w-full object-cover h-screen"
          src={imgLarge}
          alt="girl modeling"
        />
      )}
    </section>
  );
};

export default Image;
