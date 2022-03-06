import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           EditBssas <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  state = { color:"red"}
  changeColor = () => this.setState({ color: "green" })
  componentDidMount(){
    console.log(" iam mounted")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log({ prevState, newS: this.state })
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log({c:this.state.color,nc:nextState.color})
    if (this.state.color !== nextState.color) return true
  }
  componentWillUnmount(){
    alert("i am unmounting")
  }
  createError = () => {
    throw new Error("something went wrong")
  }
  
  render() {
    return (<div style={{ background:this.state.color}} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.changeColor}>Change color</button>
        <button onClick={this.createError}>create errro</button>
        <p>
          EditBssas <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>)
  }
}

export default App;
