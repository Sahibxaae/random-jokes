import RandomJoke from "./RandomJoke";

function App() {
  return (
    <div className="container">
      <h1>Random jokes</h1>
      <RandomJoke />
      <button className="generate">Generate</button>
    </div>
  );
}

export default App;
