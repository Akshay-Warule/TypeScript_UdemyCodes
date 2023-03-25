import React, { useState } from 'react';

import './App.css';
import TodoList from  './components/TodoList';
import NewTodo from './components/NewTodo';
import {Todo} from './todo.model'

const App:React.FC=()=>{
  const[todos,setTodos]=useState<Todo[]>([]);
  //const todos=[{id:'t1',text:'finish the course'}]

   const todoAddhandler=(text:string)=>{
   setTodos(prevTodos=>[...prevTodos,{id:Math.random().toString(),text:text}]);
   };

   const toDeleteHandler=(todoId:string)=>{
  setTodos(prevTodos=>{
    return prevTodos.filter(todo=>todo.id!==todoId)
  })
   }
  return<div className='App'>
   
    <NewTodo onAddTodo={todoAddhandler}></NewTodo>
    <TodoList items={todos} onDeleteTodo={toDeleteHandler}/>
  </div>
}

export default App;
