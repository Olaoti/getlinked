import './App.scss';
import Header from './components/Headerr';
import Intro from './components/Intro';
import Rules from './components/Rules';
import Criteria from './components/Criteria';
import Faqs from './components/Faqs';
import Privacy from './components/Privacy';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='bigbox'>
      <div className='bgs'>
        <div className='backgnd one'></div>
        <div className='backgnd two'></div>
        <div className='backgnd three'></div>
        <div className='backgnd four'></div>
        <div className='backgnd five'></div>
        <div className='backgnd six'></div>
        <div className='backgnd seven'></div>

      </div>
      <div className='all-section'>
        <Intro/>
        <Rules/>
        <Criteria/>
        <Faqs/>
        <Sponsors/>
        <Privacy/>
      </div>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;
