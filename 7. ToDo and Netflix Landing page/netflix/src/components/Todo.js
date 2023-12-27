import React from 'react'
import  '../style/todo.css'

export default function Todo({todo}) {
  return (
    <div className="to">{todo.title}</div>
  )
}
