# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Base Apparel coming soon page solution](#frontend-mentor---base-apparel-coming-soon-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/baseapparel-BJF2t5ZB9](https://www.frontendmentor.io/solutions/baseapparel-BJF2t5ZB9)
- Live Site URL: [https://base-apparel-qxcsv510c-mdubelbeis.vercel.app/](https://base-apparel-qxcsv510c-mdubelbeis.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/)
- [TailwindCSS](https://https://tailwindcss.com/)
- [Vercel](https://vercel.com)

### What I learned

I learned alot with this challenge. I fought many little battles with TailwindCSS. As I am getting more used to implementation in React, the main focus with this challenge was to try my best to implement the best approach to styling with Tailwind. The implementation is fast and nice but getting my head around the utilities applied to components can be overwhelming. I understand Tailwind and will continue using Tailwind for projects but I will be making my attempts and Styled Components for the next few challenges to learn and eventually have a handfull of tools to styling my web applications with.

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

### Continued development

With Tailwind, I will be continuing my focus on styling React and non-React applictions. I do love the simplicity and functionality of Tailwind but need to overcome some of the complexities and overwhelming clutter.

With responsive images, I could not get srcSet to work again. It wasn't providing me with the result I was after so I implemented my own method to render images on the webpage with a the resize event listener which would call setWindowSize, then using that state to render the proper img on the page.

```js
const [windowSize, setWindowSize] = useState(0);

useEffect(() => {
  setWindowSize(window.innerWidth);

  window.addEventListener('resize', () =>
    setWindowSize(window.innerWidth)
  );

  return () => {
    setWindowSize(0);
  };
}, [windowSize]);

<div>
  {windowSize < 1024 && <img src={imgSmall} alt="girl modeling" />}
  {windowSize >= 1024 && <img src={imgLarge} alt="girl modeling" />}
</div>;
```

I will need to continue understanding the proper implementation of the cleanup function for useEffect and find a working solution to get srcSet to work but my solution is not to implement until then.

I also want to continue finding better practices and solutions to using Tailwind for styling in React. I will take my approach much slower and ensure proper structure in React before adding styling. My weakness here is the eargerness to put styling into the application before I am sure my structure is 100%.

### Useful resources

- [https://tailwindcss.com/](https://www.tailwindcss.com) - The documentation for TailwindCSS continues to help when I forgot syntax or when I want to learn a new approach to a issue in styling.
- [https://vercel.com/docs](https://www.vercel.com/docs) - Reference for using and launching to Vercel.
- [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html) - Still helps when trying to understand how something should be in React.

## Author

- Website - [Mason J. Dubelbeis](Coming Soon!)
- Frontend Mentor - [@mdubelbeis](https://www.frontendmentor.io/profile/mdubelbeis)
- Twitter - [@mason_dubelbeis](https://twitter.com/mason_dubelbeis)
