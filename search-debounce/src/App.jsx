import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const users = [
    "Kanishtha",
    "Anshika",
    "Neha",
    "Rahul",
    "Priya",
    "Aman",
    "Riya",
    "Rohit",
    "Pooja",
    "Sakshi",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="app">

      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <div className="container">

        <div className="header">
          <div className="icon">⌕</div>

          <h1>Find Your People</h1>

          <p>
            Search users instantly with our smart search
          </p>
        </div>

        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {search && (
            <button onClick={() => setSearch("")}>
              ✕
            </button>
          )}
        </div>

        <div className="result-info">
          <span>
            {filteredUsers.length} users found
          </span>

          {search && (
            <span className="searching">
              Searching for "{search}"
            </span>
          )}
        </div>

        <div className="user-grid">

          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div className="user-card" key={user}>

                <div className={`avatar avatar-${index % 5}`}>
                  {user.charAt(0)}
                </div>

                <div className="user-info">
                  <h3>{user}</h3>
                  <p>user{index + 1}@gmail.com</p>
                </div>

                <div className="arrow">
                  →
                </div>

              </div>
            ))
          ) : (
            <div className="no-result">
              <div className="empty-icon">😕</div>

              <h2>No users found</h2>

              <p>
                Try searching with a different name
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default App;