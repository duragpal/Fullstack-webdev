import React, { useState } from "react";

export default function StateInput() {
  const [location, setLocation] = useState("noida");
  return (
    <div>
      <p> No change without useState , nothing will be added...</p>
      <p>After adding useState we can add in the form..</p>
      {/* <form htmlFor="location">
        <input id="location" value={location} placeholder="Enter" />
        
      </form> */}
      <form htmlFor="location">
        <input
          id="location"
          value={location}
          placeholder="Enter"
          onChange={(e) => {
            console.log(e.target.value);
            setLocation(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
