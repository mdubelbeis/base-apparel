import Logo from '../images/logo.svg';

import Info from './Info.component';
import Input from './Input.component';
import Image from './Image.component';

function App() {
  return (
    <div className="min-h-screen relative font-josefin-sans text-base max-w-lg mx-auto lg:min-w-full">
      <header className="p-8 lg:absolute lg:top-5 lg:left-5">
        <img className="w-24 lg:w-48" src={Logo} alt="" />
      </header>
      <main className="flex flex-col items-center md:mb-32 lg:flex-row-reverse ">
        <Image />
        <Info />
      </main>

      <footer className="absolute bottom-0 left-0 p-4 flex flex-col w-full items-center bg-desat-pink">
        <small>Designed by Frontend Mentor</small>
        <small>Coded by Mason J. Dubelbeis</small>
      </footer>
    </div>
  );
}

export default App;
