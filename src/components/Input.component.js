import arrow from '../images/icon-arrow.svg';

const Input = () => {
  return (
    <form className="relative">
      <label>
        <input
          className="border-2 border-desat-red opacity-50 pl-4 w-full py-2 rounded-full placeholder-desat-red"
          type="text"
          placeholder="Email Address"
        />
      </label>
      <button className="absolute shadow-xl shadow-desat-red block right-[1px] bottom-[1px] px-[25px] py-[11px] rounded-full bg-gradient-to-br from-desat-pink to-soft-pink">
        <img src={arrow} alt="arrow icon" />
      </button>
    </form>
  );
};

export default Input;
