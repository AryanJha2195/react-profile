import './App.css';
import Nav from './component/nav';
import About from './component/about';
import Header from './component/header/header';
import Experience from './component/experience';
import Services from './component/services';
import Portfoilo from './component/portfoilo';
import Contact from './component/contact';
import Footer from './component/footer';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfoilo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
