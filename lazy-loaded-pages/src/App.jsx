import { lazy, Suspense, useState } from "react";

const Home = lazy(() => import("./Home"));
const Profile = lazy(() => import("./Profile"));
const Settings = lazy(() => import("./Settings"));

function App() {
  const [page, setPage] = useState("home");

  function showPage() {
    if (page === "home") {
      return <Home />;
    }

    if (page === "profile") {
      return <Profile />;
    }

    return <Settings />;
  }

  return (
    <div className="app">

      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <div className="container">

        <div className="header">

          <div className="icon">⚡</div>

          <h1>Lazy Loaded Pages</h1>

          <p>
            Pages are loaded only when you open them
          </p>

        </div>

        <div className="nav">

          <button
            className={page === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            🏠 Home
          </button>

          <button
            className={page === "profile" ? "active" : ""}
            onClick={() => setPage("profile")}
          >
            👤 Profile
          </button>

          <button
            className={page === "settings" ? "active" : ""}
            onClick={() => setPage("settings")}
          >
            ⚙️ Settings
          </button>

        </div>

        <div className="page-container">

          <Suspense
            fallback={
              <div className="loading">

                <div className="loader"></div>

                <h3>Loading page...</h3>

                <p>Please wait</p>

              </div>
            }
          >
            {showPage()}
          </Suspense>

        </div>

      </div>

    </div>
  );
}

export default App;