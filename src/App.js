import React from 'react';
import './App.css';

function App() {
  const nayoks = ['Jasim', 'Alam', 'Hero', 'Bapparaz'];
  const products = [
    {name : 'Photoshop', price : '$ 500'},
    {name : 'PdF Reader', price : '$ 50'}
 ]


  return (
    <div className="App">
      <header className="App-header">
        <h2>React Practice</h2>

        <Product  product = {products[0]} ></Product>
        <Product  product = {products[1]} ></Product>
        
        <Player name = 'Sakib Al hasan' country = 'Bangladesh' ></Player>
        <Player name = 'Virat Koheli' country = 'India'></Player>
        <Player name = 'Tendulker' country = 'India' ></Player>
        <Player name = {nayoks[3]}></Player>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border : '2px solid white',
    backgroundColor : 'red',
    width : '300px',
    height : '300px',
    borderRadius : '10px',
    color : 'black',
    float : 'left',
    margin : '10px'
  }
  const {name, price} = props.product
  return(
    <div style={productStyle}>
      <h3>Name : {name} </h3>
      <h4> {price} </h4>
      <button style = {{backgroundColor : 'black', width : '100px', height: '30px', color:'white', border: '1px solid yellow', borderRadius : '5px'}} >Buy Now</button>
    </div>
  )
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
