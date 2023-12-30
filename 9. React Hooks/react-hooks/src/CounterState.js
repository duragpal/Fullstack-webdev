import React, { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>You clicked me {count} times.</p>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        {" "}
        CLICK ME:{count}
      </button>
    </div>
  );
}
