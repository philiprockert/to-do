import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
//import './App.css';
const todos = [ 
{text:"hacer trabajos", complited: false},
{text:"hacer trabajos", complited: false},
{text:"hacer trabajos", complited: false}
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      
      {/*<TodoList>
        {todos.map(todo => (<Todoitem />))}
      </TodoList>*/}
      {/*<CreateTodoButton />*/}
      <button>+</button>



    </React.Fragment>
    
  );
}

export default App;
