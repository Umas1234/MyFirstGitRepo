import logo from './logo.svg';
import './App.css';
import moment from "moment";


function App() {
  let timer = moment(new Date()).format("DD/MM/YYYY hh:mm:ss");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>Current Date And Time: {timer}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
