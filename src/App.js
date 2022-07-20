import './App.css';
import './content/introduction'
import { introduction } from './content/introduction';
import React, { useState } from 'react';
import { compliments } from './content/compliments'
import BounceText from './BounceText';

function App() {
  const [count, setCount] = useState("");
  const [shake, setShake] = useState(false);
  const [firstTimePressed, setFirstTimePressed] = useState(true)
  const myfunct = () => {
    if (firstTimePressed) {
      setCount(compliments[0])
    } else {
      const idx = Math.floor(Math.random() * compliments.length);
      setCount(compliments[idx])
    }
    setShake(true)
    setTimeout(() => setShake(false), 1400)
    setFirstTimePressed(false)
  }



  return (
    <div className="App">
      <div className="App-Header">
        <div className="App-Header-Content">
          <BounceText shake={true} childClassName="App-Header-Content-Title">
            Introduction
          </BounceText>
          <div>
            <p className="App-Header-Content-Introduction">
              {introduction}
            </p>
          </div>
          <BounceText shake={shake} childClassName="App-Header-Content-Introduction">
            {count}
          </BounceText>
          <div className="App-Header-Content-Introduction-Button">
            <button onClick={myfunct}> Surprise me</button>
          </div>
        </div>
      </div>
      <p>
        Experience
      </p>
    </div>
  );
}

export default App;
