// IMPORTS and DEPENDENCIES
import logo from './logo.svg';
import './App.css';

// COMPONENT DEFINITION
function App() {
  // application component code
  // parent component inside which all other components will be organized and rendered

  // ANY VARIABLES
  const appLinkClass = 'App-link';
  const myName = 'Tristan';

  // RETURNS JSX
  return (
    // our App function returns JSX
    <div className='App'>
      {/* this is a JSX comment */}
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/*
          - create a new JSX element h1
          - passed in a dynamic variable value using new syntax { var value }
        */}
        <h1>{myName}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={appLinkClass}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// EXPORT THE COMPONENT
export default App;
