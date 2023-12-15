import warranyBuddy from "./assets/main-logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://swarajbaral.github.io" target="_blank">
          <img src={warranyBuddy} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Warranty Buddy</h1>
      <div className="card">
        <p>A Comprehensive Solution for All Your Warranty Needs.</p>
      </div>
      <p className="read-the-docs">Coming soon</p>
    </>
  );
}

export default App;
