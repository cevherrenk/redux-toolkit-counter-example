import React from 'react';
import Counter from "./components/counter";
import CounterActions from "./components/counterActions";

function App() {

  return (
    <div className="App">
      <Counter/>
      <CounterActions/>
    </div>
  );
}

export default App;
