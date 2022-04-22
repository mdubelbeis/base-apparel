import { useState, useEffect } from 'react';

import arrow from '../images/icon-arrow.svg';
import errorIcon from '../images/icon-error.svg';

const Input = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [access, setAccess] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setInput('');

    if (!input.includes('@')) {
      setError('Please provide a valid email');
      setAccess(false);
    } else {
      setError('Accepted');
      setAccess(true);
    }
  };

  return (
    <>
      <form className="relative" onSubmit={(e) => onFormSubmit(e)}>
        <label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="focus:outline-soft-red border-2 border-desat-red opacity-50 pl-4 w-full py-2 rounded-full placeholder-desat-red"
            type="text"
            placeholder="Email Address"
          />
        </label>
        <button className="focus:outline-soft-red absolute shadow-xl shadow-desat-red block right-[1px] bottom-[1px] px-[25px] py-[11px] rounded-full bg-gradient-to-br from-desat-pink to-soft-pink">
          <img src={arrow} alt="arrow icon" />
        </button>
        {error && (
          <span
            className={`absolute left-4 -bottom-6 text-sm ${
              access ? 'text-green-500' : 'text-red-500'
            } `}
          >
            {error}
          </span>
        )}
        {error && (
          <div
            className={`absolute right-16 mr-2 bottom-[10px] ${
              access ? 'hidden' : 'block'
            }`}
          >
            <img src={errorIcon} alt="Error icon" />
          </div>
        )}
      </form>
    </>
  );
};

export default Input;
