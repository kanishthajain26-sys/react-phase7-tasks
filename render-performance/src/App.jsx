import { useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div className="app">

      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <div className="container">

        <div className="header">

          <div className="icon">
            ⚡
          </div>

          <h1>Render Performance</h1>

          <p>
            Analyze and optimize unnecessary re-renders
          </p>

        </div>

        <div className="parent-card">

          <div className="card-label">
            PARENT COMPONENT
          </div>

          <h2>Counter</h2>

          <div className="count">
            {count}
          </div>

          <button onClick={handleIncrement}>
            + Increase Count
          </button>

          <p>
            Change the count and observe the child component.
          </p>

        </div>

        <Child />

        <div className="info-card">

          <div className="info-icon">
            💡
          </div>

          <div>
            <h3>React.memo Optimization</h3>

            <p>
              The Child component is wrapped with React.memo.
              It will not re-render when its props have not changed.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;