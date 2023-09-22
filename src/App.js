import './App.scss';
import Header from './components/Headerr';
import Intro from './components/Intro';
import Rules from './components/Rules';
import Criteria from './components/Criteria';
import Faqs from './components/Faqs';

function App() {
  return (
    <div className="1pp">
      <Header/>
      <Intro/>
      <Rules/>
      <Criteria/>
      <Faqs/>
    </div>
  );
}

export default App;
