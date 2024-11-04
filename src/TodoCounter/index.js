import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter(){

        const {
            completedTodos,
            totalTodos,
        } = React.useContext(TodoContext);

    return (

        totalTodos === completedTodos ? 

        <h1 className='TodoCounter'>
            Felicidades completaste todas las tareas!!
            <br />
            Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's
        </h1>

        :

        <h1 className='TodoCounter'>
            Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's
        </h1>
    );
}

export {TodoCounter};