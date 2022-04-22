import Logo from '../images/logo.svg';
import imgSmall from '../images/hero-mobile.jpg';

import Info from './Info.component';
import Input from './Input.component';

function App() {
  return (
    <div className="font-josefin-sans text-base">
      <header className="p-8">
        <img className="w-24" src={Logo} alt="" />
      </header>

      <main>
        <div>
          <img className="w-full" src={imgSmall} alt="" />
        </div>
        <section className="mt-16 text-center p-8">
          <Info />
        </section>
      </main>

      <footer className="absolute bottom-0 left-0 p-4 flex flex-col w-full items-center bg-desat-pink">
        <small>Designed by Frontend Mentor</small>
        <small>Coded by Mason J. Dubelbeis</small>
      </footer>
    </div>
  );
}

export default App;
