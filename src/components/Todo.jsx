import React from 'react'
import { useState } from 'react';
import styles from "./todo.module.css";
import TodoItem from './TodoItem';

// we have to perform  following operation to create todo app
// 1) read input from the user
// 2) update the todo list
// 3) re-render the todo list whenever needed


const Todo=()=>{
    let [newTodo,setTodo] =useState("");    // this line is to store the value bcoz whenever todos will update we lost our previous value
    const [todos, setTodos] = useState([]);
    
    let onDelete=(id)=>{
        let newTodo = todos.filter(todos=>todos.id!==id);
        setTodos(newTodo);
    }

    const hadleChange=(e)=>{
        setTodo(e.target.value);   
              //value whatever in input will be in target:{value}
    }


    // flow of this whole component
    // 1) onChange of input value--store the value`
    // 2) read the stored value and add it to the myTodo list


    return (
        <div>Todo
            <input value={newTodo} onChange={hadleChange} autoFocus/>   
            {/* {value={newTodo} to clear the input} */}
            <button className={styles.addButton}
             onClick={()=>{                 
                setTodos([...todos,           //...todos meaning old value of array  
                {id: Date.now(),value:newTodo,  isCompleted:false}    // and this mean adding new value
            ]);
            setTodo("");  
            // {/* setTodo("") to clear the input} */}
             }
             }>+</button>

            <div className={styles.todolist}>
            {todos.map((todo,i)=>(             //  this () paranthesis means return as map return something
                <TodoItem color={i%2==0 ? "blue" : "green"} key={todo.id} todo={todo} onDelete = {onDelete}/>
                 ))}
            </div>
        </div>
    )
}

export default Todo;