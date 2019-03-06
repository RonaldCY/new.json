import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// import Body, { Body2 } from "./components/Body"
// import { Header } from "./components/Header"
// import Counter from "./components/Counter"
// import ImageSlider from "./components/ImageSlider"
// import MyForm from "./components/MyForm";
// import ValidationForm from "./components/ValidationForm";
// import FetchRandomUser from "./components/FetchRandomUser";
import TodoList from "./components/TodoList";

// const Body = props => (
//   <div>
//     <p className="App-intro">{props.text}</p>
//     <p className="App-intro">{props.text2}</p>
//     <p className="App-intro">{props.myFunc(1, 2)}</p>
//     <p>
//       Say hi, Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//   </a>
//   </div>
// );
// const Body = () => {
//   return (
//     <div>
//       <p>
//         Say hi, Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//     </a>
//     </div>
//   );
// };
// function Body() {
//   return (
//     <div>
//       <p>
//         Say hi, Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//     </a>
//     </div>
//   );
// };

// class Header extends Component {
//   render() {
//     return (
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">{this.props.title}</h1>
//         <div>{JSON.stringify(this.props.myObj)}</div>
//         <div>{this.props.myArr[0]}</div>
//         <div>{this.props.myFunc(10, 12)}</div>
//       </header>
//     );
//   }
// }

class App extends Component {
  add(a, b) {
    return a + b;
  }

  state = {
    visible: true,
    whichComponentToShow: "ImageSlider"
  }

  render() {
    // let slider = this.state.visible ? (
    //   <ImageSlider />
    // ) : (
    //     <div><Counter initialCount={0} /></div>
    //   );

    // if (!this.state.visible) {
    //   slider = <div>display nothing</div>;
    // }
    //const add = (a, b) => a + b;
    // const buttonText = this.state.visible ? 'hide' : 'show';
    return (
      <div className="App">
        {/* <Header title="Hello"
          num={5}
          myArr={[1, 2, 3]}
          myFunc={(a, b) => a + b}
          myObj={{
            a: 5,
            b: 6
          }}
        />
        <Body2 />
        <Body myFunc={this.add} text="i am cool" text2="i am cool2" />
        <Counter initialCount={0} />
        <Counter initialCount={10} /> */}
        {/* {slider}
        <button onClick={() => {
          this.setState({ visible: !this.state.visible });
        }}>
          {buttonText}
        </button> */}
        {/* <div className={this.state.visible ? "visible" : "hidden"}>
          <Counter />
        </div>
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          toggle counter
        </button> */}

        <TodoList />
      </div>
    );
  }
}

export default App;
