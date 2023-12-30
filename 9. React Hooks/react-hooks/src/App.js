import React from "react";
import "./App.css";
import Counter from "./CounterState";
import StateInput from "./StateInput";
import EffectState from "./EffectState";

function App() {
  return (
    <div>
      <Counter />
      <StateInput />
      <EffectState />
    </div>
  );
}

export default App;
