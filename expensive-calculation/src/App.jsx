import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(10);
  const [count, setCount] = useState(0);

  function expensiveCalculation(number) {
    console.log("Calculation running...");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += number * 2;
    }

    return result;
  }

  const result = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div className="app">

      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <div className="container">

        <div className="header">
          <div className="icon">⚡</div>

          <h1>Calculation Optimization</h1>

          <p>
            Optimize expensive calculations with React
          </p>
        </div>

        <div className="main-card">

          <div className="section">
            <p className="label">NUMBER</p>

            <div className="number-display">
              {number}
            </div>

            <div className="buttons">
              <button onClick={() => setNumber(number - 1)}>
                −
              </button>

              <button onClick={() => setNumber(number + 1)}>
                +
              </button>
            </div>
          </div>

          <div className="divider"></div>

          <div className="result-section">

            <p className="label">CALCULATION RESULT</p>

            <div className="result">
              {result}
            </div>

            <p className="description">
              This expensive calculation only runs when
              the number changes.
            </p>

          </div>

        </div>

        <div className="counter-card">

          <div>
            <h3>Test Re-render</h3>

            <p>
              Increase this counter without changing the number.
            </p>
          </div>

          <div className="counter-controls">

            <span>{count}</span>

            <button onClick={() => setCount(count + 1)}>
              Increment
            </button>

          </div>

        </div>

        <div className="info-card">
          <span>💡</span>

          <div>
            <h3>useMemo Optimization</h3>

            <p>
              The expensive calculation is remembered and
              does not run again when unrelated state changes.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;