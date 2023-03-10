import './App.css';
import { Header } from './components/header/Header';
import { Hangman } from './components/hangman/Hangman';
import { Keyboard } from './components/keyboard/Keyboard';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hangman />
      <Keyboard />
    </div>
  );
}

export default App;
