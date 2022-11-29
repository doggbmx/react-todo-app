import React from "react";
// import TodoCounter from './ToDoCounter'
import { TodoCounter } from './ToDoCounter'
import { TodoItem } from './ToDoItem'
import { TodoSearch } from './ToDoSearch'
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const todos = [
  {
    title: 'Fumar porro',
    completed:false
  },
  {
    title: 'Jugar el mejor juego del mundo (BF1)',
    completed: false
  },
  {
    title: 'Tocarle una teta a sergio',
    completed:true
  },
  {
    title: 'Limpiar mi nhoba',
    completed:false
  }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => {
          return <TodoItem 
          key={todo.title} 
          text={todo.title}
          completed={todo.completed}
          />
        })}

      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
