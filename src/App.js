import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <p className="footer">
        {" "}
        <a
          href="https://github.com/villa151/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by{" "}
        <a
          href="https://effulgent-gingersnap-c33a99.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Samantha Cabrera
        </a>{" "}
        from
        <a href="https://shecodes.io/" target="_blank" rel="noreferrer">
          SheCodes
        </a>
      </p>
    </div>
  );
}

export default App;
