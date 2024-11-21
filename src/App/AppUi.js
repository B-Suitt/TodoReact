import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';


function AppUi() {
  const { 
    loading, 
    error, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <h1 style={{
        fontSize:'3rem',
        fontWeight:'bold',
        textAlign: 'center',
        margin: '20px 0'
      }}>TODO LIST</h1>
      <TodoCounter />
       
        <TodoSearch />
      

      <TodoList>
        {loading && 
          Array(5) //Numero de skeletons a mostrar
          .fill(0)
          .map((_,index) => <TodosLoading key={index}/>)
          }
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <TodosEmpty />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton
          setOpenModal={setOpenModal}
        />

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  );
}

export { AppUi };

// Prop Drilling: es una paso del desarrollo que ocurre cuando necesitamos
// obtener datos que están en varias capas en el árbol de componentes React.

// Este se ve siempre cuando pasamos props entre hijos,
// luego ese a otros hijos y así sucesivamente... la solución es usar context:

// Context: es un elemento que podemos crear en React para establecer
// una comunicación directa entre un componente en un nivel muy alto y
//  uno en un nivel mucho más bajo.

// Por ende context permite acceder a los valores de forma directa.
