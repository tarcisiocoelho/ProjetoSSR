import React from "react";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
    <div className="container mt-5 p-3">

      <h1 className="display-4">Projeto Recode SSR</h1>

      <p className="lead">{count}</p>
      <button className="btn btn-primary m-2" onClick={increment}>Increment</button>
      <button className="btn btn-danger m-2" onClick={decrement}>Decrement</button>

    </div>
      
    </>
  );
}

export default App;
