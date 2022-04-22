import Logo from '../images/logo.svg';
import imgSmall from '../images/hero-mobile.jpg';

import Info from './Info.component';
import Input from './Input.component';

function App() {
  return (
    <div className="font-josefin-sans text-base">
      <header>
        <img src={Logo} alt="" />
      </header>
      <main>
        <div>
          <img src={imgSmall} alt="" />
        </div>
        <section>
          <Info />
        </section>
        <section>
          <Input />
        </section>
      </main>
    </div>
  );
}

export default App;
