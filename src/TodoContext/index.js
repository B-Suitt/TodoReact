import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  // Usando el Hook "useState" para crear un estado y su modificador
  // y poder utilizarlo para escribir en el buscador
  //
  // Desestructurando state en [ value, setValue ]
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
    const {
      // Renombrar 'item' -> 'todos'
      item: todos,
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage("TODOS_V1", []);


    // Estados derivados:
    // Variables / propiedades / cálculos que vienen a partir de un estado
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;


    //Funcion filtrar texto sin tildes
    const searchedTodos = todos.filter(
      (todo) => { 
        const noTildes = (text) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        };
        const todoText = noTildes(todo.text.toLowerCase());
        const searchText = noTildes(searchValue.toLowerCase());
        return todoText.includes(searchText);
      }
    );

    // Función para crear nuevo todo
    const addTodo = (text)=> {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false,
      })
      saveTodos(newTodos);
    }

  // Funcion para marcar una todo como completado
  const completeTodo = (text) => {
    const newTodos = [...todos]; //[...todos] para copiar array de todos
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  // Función para eliminar todo cuando hace click al ícono
  const deleteTodo = (text) => {
    const newTodos = [...todos]; //[...todos] para copiar array de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // TODO: Función para editar todos


   /* ************************ END Traer toda la lógica del App() al Context ************************ */

  return (
    //value:
    //Almacena en forma de obj todas las props a las que podran acceder todos los children
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

// const defaultTodos = [
// {text: 'Cortar cebolla', completed:true},
// {text: 'terminar curso', completed:true},
// {text: 'llorar como llorona', completed:false},
// {text: 'okai', completed:false},
// {text: 'okai5', completed:false},
// ];
