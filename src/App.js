import React from 'react';
import './App.css';

function App() {
  let nayoks = ['Jasim', 'Alam', 'Hero', 'Bapparaz']
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Practice</h2>
        
        <Player name = 'Sakib Al hasan' country = 'Bangladesh' ></Player>
        <Player name = 'Virat Koheli' country = 'India'></Player>
        <Player name = 'Tendulker' country = 'India' ></Player>
        <Player name = {nayoks[3]}></Player>
      </header>
    </div>
  );
}
function Player(props){
  return (
  <div style = {{border : '2px solid yellow', margin : '10px', padding : '10px', width : '500px'}} >
      <h1>Name : {props.name}</h1>
      <h3>Country : {props.country}</h3>
      <button style = {{backgroundColor : 'black', width : '100px', height: '30px', color:'white', border: '1px solid yellow', borderRadius : '5px'}} >Submit</button>
  </div>);
}

export default App;
