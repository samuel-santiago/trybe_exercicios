import React, { useState } from "react";

 const App = ()=> {
 const [counter, setCounter] = useState(0)

    return (
      <div>
        <div>Counter: {counter}</div>
        <button
          type="button"
          onClick={() => setCounter(counter+1) }
        >
          Increase Counter
        </button>
      </div>
    );
  }

export default App;