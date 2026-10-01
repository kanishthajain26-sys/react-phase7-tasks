import { memo } from "react";

function UserCard({ name, email }) {
  console.log("UserCard rendered:", name);

  return (
    <div className="user-card">

      <div className="avatar">
        {name.replace("User ", "")}
      </div>

      <div className="user-info">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>

      <div className="status">
        <span></span>
        Active
      </div>

      <div className="arrow">
        →
      </div>

    </div>
  );
}

export default memo(UserCard);