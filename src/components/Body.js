import React from "react";

const Body = props => (
    <div>
        <p className="App-intro">{props.text}</p>
        <p className="App-intro">{props.text2}</p>
        <p className="App-intro">{props.myFunc(1, 2)}</p>
        <p>
            Say hi, Edit <code>src/App.js</code> and save to reload.
      </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
    </a>
    </div>
);

export default Body;

export const Body2 = () => (
    <div>
        <div>hi</div>
    </div>
)