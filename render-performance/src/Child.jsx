import { memo } from "react";

function Child() {

  console.log("Child component rendered");

  return (
    <div className="child-card">

      <div className="child-icon">
        👶
      </div>

      <div>

        <div className="card-label">
          CHILD COMPONENT
        </div>

        <h2>Child Component</h2>

        <p>
          Check the browser console to see when I render.
        </p>

      </div>

      <div className="optimized">
        ✓ Optimized
      </div>

    </div>
  );
}

export default memo(Child);