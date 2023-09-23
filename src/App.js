import './App.scss';
import Header from './components/Headerr';
import Intro from './components/Intro';
import Rules from './components/Rules';
import Criteria from './components/Criteria';
import Faqs from './components/Faqs';
import Privacy from './components/Privacy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="1pp">
      <Header/>
      <Intro/>
      <Rules/>
      <Criteria/>
      <Faqs/>
      <Privacy/>
      <Footer/>
    </div>
  );
}

export default App;
