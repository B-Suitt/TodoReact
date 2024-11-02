import React from 'react';
import { AppUi } from './AppUi';
import { useLocalStorage } from './useLocalStorage';
// const defaultTodos = [
// {text: 'Cortar cebolla', completed:true},
// {text: 'terminar curso', completed:true},
// {text: 'llorar como llorona', completed:false},
// {text: 'okai', completed:false},
// {text: 'okai5', completed:false},
// ];

function App() {

  //State = objeto para almacenar datos que se vuelve a renderizar en la ui
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  //estados derivados = que deriva de otros valores de estado o propiedades, en lugar de almacenarce directamente en el
  //estado de un componente
  // la !! transformar en boleano 
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
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
  );

  const completeTodo = (text) => {
    const newTodos = [...todos]; //[...todos] para copiar array de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed= true;
    saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]; //[...todos] para copiar array de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }

  return (
    <AppUi 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
     
    />
  );
}


export default App;
