import React, { useState, useEffect } from "react";

export default function EffectState() {
  const [time, settime] = useState(new Date());
  //   useEffect(() => {()=>{}
  //   }, [dependecy array])
  // LOGIC TO FETCH THE DATA;
  // DIDMOUNT .
  useEffect(() => {
    const timer = setTimeout(() => settime(new Date()), 1000);
    console.log(time);
    return () => clearTimeout(timer);
  });
  //DIDUPDATE

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
}
