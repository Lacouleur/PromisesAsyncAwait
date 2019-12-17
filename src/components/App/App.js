import React, { useState } from "react";
import ExampleOne from "../ExampleOne/ExampleOne";
import ExampleTwo from "../ExampleTwo/ExampleTwo";
import "./app.scss";

const App = () => {

  const [display, setDisplay] = useState("ExampleTwo");

  return (
    <div className="App">
    <div className="appBox">
      { display==="ExampleOne" && <ExampleOne /> }
      { display==="ExampleTwo" && <ExampleTwo /> }
    </div>
    </div>
  );
};

export default App;