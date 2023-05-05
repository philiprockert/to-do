import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { todos } from './TodoList';
import { Todotem } from './Todotem';
import { CreateButton } from './CreateButton';
//import './App.css';

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => ( <Todotem text= {todo.text}/> ))}
      </TodoList>
      <CreateButton />
    </React.Fragment>
    
  );
}

export default App;
