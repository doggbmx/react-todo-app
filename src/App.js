import React from "react";
// import TodoCounter from './ToDoCounter'
import { TodoCounter } from './ToDoCounter'
import { TodoItem } from './ToDoItem'
import { TodoSearch } from './ToDoSearch'
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const defaultTodos = [
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
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  let completedTodos = todos.filter(todos => !!todos.completed).length;
  let totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  };

  return (
    <React.Fragment>
      <TodoCounter 
      completed={completedTodos}
      total={totalTodos}
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => {
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
