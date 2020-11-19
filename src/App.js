import './App.css';
import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Header'
import Carrousel from './components/Carrousel';
import Services from './components/Services';
import Section from './components/Section';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Carrousel />
      <Services />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
