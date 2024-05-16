import "./App.css";

function App() {
  const handleClick = () => {
    alert("Button was cliked!!!");
  };

  return (
    <div>
      <h1>Justin</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
