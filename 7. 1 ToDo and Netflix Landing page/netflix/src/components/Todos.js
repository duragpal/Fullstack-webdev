import React, { useState, useEffect, useLayoutEffect } from 'react'
import axios from "axios"

import Todo from "./Todo"
import  '../style/todo.css'

const API_URL= "https://jsonplaceholder.typicode.com/todos";

export default function Todos() {
    //use fat arrow fn
    // usestate hook..... to re render whenever change is initiated... destructuring process
    // [value, function]
    const [IsLoading, setIsLoading] = useState(true);
    const [todos, setTodos] = useState([])
    // console.log(count + "render");
    const fetchData=async() =>{
        let res = await axios.get(API_URL);
        setTodos(res.data);
        setIsLoading(false);
        
    }
    
    useEffect(()=>{fetchData();},[]);
    
    if(IsLoading){
       return <p>Loading..</p>
    }
    else{
        return (
            <div className="todos">
                {todos.map((todo, index)=>{
                    return(<Todo  key={index} todo={todo}/>
                    )
                })}
            </div>
        )
    }
  
    
  
}
// //Array deconstruction
// const arr=[1,2,3,4,5]
// const [firstVal, secondVal] =arr //value=1 and 2 to firstval and secondVal
// eg... const obj = {name:"dps", age:20}
// const {name} = obj;   it will give name as sunny
// const [count, setCount] = useState(0);
{/* <button onClick={()=>{setCount(count+1)}}>Click Me to increase count {count}</button> */}