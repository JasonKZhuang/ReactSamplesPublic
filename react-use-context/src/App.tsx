import { useContext } from 'react';
import { DemoContext } from './context/test/demo';
import Parent from './context/test/parent';
import logo from './logo.svg';
import './App.css';

function App() {
  /** get the model from useContext function */
  const { model } = useContext(DemoContext)

  const vtext = model.text
  const vcolor = model.color
  const vstyle = { color: vcolor }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='App-title' style={vstyle}>
          {vtext}
        </p>
        {/* parent */}
        <Parent />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
