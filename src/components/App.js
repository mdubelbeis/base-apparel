import Logo from '../images/logo.svg';

import Info from './Info.component';
import Image from './Image.component';

function App() {
  return (
    <div>
      <div className="font-josefin-sans text-base mx-auto lg:mx-12 max-w-xl">
        <div class="container flex flex-col lg:space-y-20 max-w-[600px] lg:pl-20 lg:pt-10 xl:pl-64 xl:pt-10">
          <header className="p-8 lg:p-0 lg:mt-36">
            <img className="w-24 lg:w-48" src={Logo} alt="" />
          </header>
          <main className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:items-center">
            <Image />
            <Info />
          </main>
        </div>

        {/* <footer className="absolute bottom-0 left-0 p-2 flex flex-col w-screen items-center bg-desat-pink">
          <small>Designed by Frontend Mentor</small>
          <small>Coded by Mason J. Dubelbeis</small>
        </footer> */}
      </div>
    </div>
  );
}

export default App;
