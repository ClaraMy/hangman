import './App.css';
import { Header } from './components/header/Header';
import { Hangman } from './components/hangman';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hangman />
    </div>
  );
}

export default App;
