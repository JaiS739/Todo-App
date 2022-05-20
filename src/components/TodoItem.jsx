import React, { useState } from 'react'
import styles from "./todo.module.css";



const Todoitem = ({ todo, color, onDelete }) => {

    const [iscompleted , setIscompleted] = useState(todo.iscompleted);

    let checkedBox=(e)=>{
        setIscompleted(e.target.value)
        setIscompleted(!iscompleted);    
        // to uncheck do this
    }

    return (
        <div className={styles.todo} key={todo.id}>
            {/* key always should be in parent div */}

            <div className={styles.flexy}>
                <input  onChange={checkedBox} checked={iscompleted} type="checkbox" />

                <div className={iscompleted ? styles.strike : ""} style={{ color }} >{todo.value}</div>
                <button onClick={()=>onDelete(todo.id)} className={styles.delete}>-</button>
            </div>
        </div>
    )
}

export default Todoitem