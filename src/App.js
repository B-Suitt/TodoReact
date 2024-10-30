import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed:true},
  {text: 'terminar curso', completed:true},
  {text: 'llorar como llorona', completed:false},
  {text: 'okai', completed:false},
  {text: 'okai5', completed:false},
];


function App() {
  //Componente padre
  //State = objeto para almacenar datos que se vuelve a renderizar en la ui
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  //estados derivados = que deriva de otros valores de estado o propiedades, en lugar de almacenarce directamente en el
  //estado de un componente
  // la !! transformar en boleano 
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const Todos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) =>  {
      //funcion texto sin tilder
      const noTildes = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      }
      const todoText = noTildes(todo.text.toLowerCase());
      const searchText = noTildes(searchValue.toLowerCase());

      return todoText.includes(searchText)
    }
  )
  
  const completeTodo = (text) => {
    const newTodos = [...todos]; //[...todos] para copiar array de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed= true;
    setTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]; //[...todos] para copiar array de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={Todos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList> 
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

    <CreateTodoButton />

    </React.Fragment>
  );
}


export default App;
