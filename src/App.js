import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {  
    return (
      <div className="App">
        <h1>Todo List</h1>
        <br/>
        <br/>
        <br/>
       <Todo/>
    </div>
    )
  }  

export default App
