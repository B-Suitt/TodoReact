import React from "react";
import {TodoContext} from '../TodoContext';
import './TodoForm.css';

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [error, setError] = React.useState('')
    
    const {
        setOpenModal,
        addTodo,
        todos
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();

        if(todos.some(todo => todo.text.toLowerCase() === newTodoValue.toLowerCase())){
            setError('Error: Esta tarea ya existe!!')
        }else {
            addTodo(newTodoValue);
            setNewTodoValue('');
            setError('');
            setOpenModal(false);
        }
       
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
return(
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
            placeholder="escribe aqui un todo porfavor"
            value={newTodoValue}
            onChange={onChange}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar error si el todo es repetido */}
        <div className="TodoForm-buttonContainer">
            <button 
                type="button"
                className="TodoForm-button 
                TodoForm-button--cancel"
                onClick={onCancel}
            >Cancelar</button>
            <button 
                type="submit"
                className="TodoForm-button
                TodoForm-button--add"
                onClick={onSubmit}
            >Añadir</button>
        </div>
    </form>
)

}

export { TodoForm}