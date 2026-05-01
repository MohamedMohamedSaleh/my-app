// client component 
"use client"; // this to use client component
import { useState , useEffect, use } from "react";
import styles from "./../page.module.css";

export default function Todo() {
    const [todos , setTodos] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/posts")
        .then(res => res.json())
        .then(data => setTodos(data.posts)), []
    }) 
    return (
        <div>
            <h1>Todo</h1>

            {
                todos.map(todo =>
            <div className={styles.myPost} key={todo.id}>
                    
                    <p key={todo.id}>{todo.title}</p>
            </div>
                
                )
            }
        </div>
    );
} 