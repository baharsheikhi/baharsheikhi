import './App.css';
import './content/introduction'
import { introduction } from './content/introduction';
import React, { useState } from 'react';
import { compliments } from './content/compliments'
import BounceText from './BounceText';
import classNames from 'classnames';

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
      {/* Introduction section  */}
      <div className="App-Header">
        <div className="App-Header-Content">
          <BounceText shake={true} childClassName="App-Title">
            Introduction
          </BounceText>
          <div>
            <p className="App-Text">
              {introduction}
            </p>
          </div>
          <BounceText shake={shake} childClassName="App-Text">
            {count}
          </BounceText>
          <div className="App-Header-Content-Introduction-Button-Container">
            <button className="App-Header-Content-Introduction-Button" onClick={myfunct}> Surprise me</button>
          </div>
        </div>
      </div>


      {/* Experience section  */}
      <div className="App-Experience">
        <p className="App-Title">
          Experience
        </p>
        <div className="App-Experience-Content-Container">
          <div className="App-Experience-Content-Container-Column-Left">
            <p className={classNames("App-Text", "App-Header-Experience-Content-Text")}><b>Software Engineer at Alma</b><br /> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="App-Experience-Content-Container-Column-Right">
            <p className={classNames("App-Text", "App-Header-Experience-Content-Text")}><b>Software Engineer at Drift</b><br /> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
