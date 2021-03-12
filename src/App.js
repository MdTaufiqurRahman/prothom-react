import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['Jasim', 'Alam', 'Hero', 'Bapparaz', 'Bappi'];
  const friends= ['Jasim', 'Alam', 'Hero', 'Bapparaz', 'Bappi'];
  const products = [
    {name : 'Photoshop', price : '$ 500'},
    {name : 'PdF Reader', price : '$ 50'}
 ]


  return (
    <div className="App">
      <header className="App-header">
        <h2>React Practice</h2>
        <Counter></Counter>
        <Users></Users>

        <ul>{
          nayoks.map(nayok => <li> {nayok} </li> )
        }
        {
        products.map(product => <li>{product.name}</li> )
        }
        </ul>
        {
        products.map(pd => <Product product = {pd}></Product>)
        }

        {
          friends.map(fnd => <li >{fnd}</li>)
        }
        
        <Player name = 'Sakib Al hasan' country = 'Bangladesh' ></Player>
        <Player name = 'Virat Koheli' country = 'India'></Player>
        <Player name = 'Tendulker' country = 'India' ></Player>
        <Player name = {nayoks[3]}></Player>
      </header>
    </div>
  );
}


function Users (){
  const [users, setUsers] = useState ([])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>User : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
          
        }
        {
          users.map(user => <li>{user.phone}</li>)
        }

      </ul>
    </div>
  )
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

function Counter(){
  const [count, setCount] =useState(10);
  const handleClick = () => setCount(count+1);
  return (
    <div>
      <h1>count: {count} </h1>
      <button onClick={() => setCount(count+1)} >Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease </button>
    </div>
  )
}

export default App;
