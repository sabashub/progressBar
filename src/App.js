import React from "react";
import "./styles.css";
import { useState } from "react";
import ProgeressBar from "./ProgeressBar";
/* Visit www.reactchallenges.live */

/* Instructions: 
   Create a Progress Bar that should fill based on the input percentage value
*/

export default function App() {
  const [val, setVal] = useState(10)
  
  const setValuer = (e) =>{
    setVal(Number(e.target.value))
  };


  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgeressBar width={val} />
        <form>
          <label for="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}