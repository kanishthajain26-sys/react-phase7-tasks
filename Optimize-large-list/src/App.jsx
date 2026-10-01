import { useState } from "react";
import UserCard from "./UserCard";

function App() {
  const [count, setCount] = useState(0);

  const users = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@gmail.com`,
  }));

  return (
    <div className="app">

      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <div className="container">

        <div className="header">
          <div className="icon">⚡</div>

          <h1>Optimize Large List</h1>

          <p>
            Efficiently render and manage 1000+ users
          </p>
        </div>

        <div className="stats">

          <div className="stat-card">
            <div className="stat-icon">👥</div>

            <div>
              <span>Total Users</span>
              <h2>1,000</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔄</div>

            <div>
              <span>Re-renders</span>
              <h2>{count}</h2>
            </div>
          </div>

        </div>

        <div className="counter-card">

          <div>
            <h3>Test Component Rendering</h3>

            <p>
              Click the button and observe the console.
            </p>
          </div>

          <button onClick={() => setCount(count + 1)}>
            <span>+</span>
            Increment
          </button>

        </div>

        <div className="list-header">
          <div>
            <h2>User Directory</h2>
            <p>Showing 1000 users</p>
          </div>

          <div className="badge">
            Optimized
          </div>
        </div>

        <div className="user-list">

          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
            />
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;