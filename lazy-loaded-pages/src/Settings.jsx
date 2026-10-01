function Settings() {
  return (
    <div className="page">

      <div className="page-icon">⚙️</div>

      <h2>Settings</h2>

      <p>
        Manage your application settings here.
      </p>

      <div className="setting">

        <span>🔔 Notifications</span>

        <span className="on">
          ON
        </span>

      </div>

      <div className="setting">

        <span>🌙 Dark Mode</span>

        <span className="on">
          ON
        </span>

      </div>

    </div>
  );
}

export default Settings;