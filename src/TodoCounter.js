import './TodoCounter.css'
function TodoCounter({total, completed}){
    return (

        total == completed ? 

        <h1 className='TodoCounter'>
            Felicidades completaste todas las tareas!!
            <br />
            Has Completado <span>{completed}</span> de <span>{total}</span> TODO's
        </h1>

        :

        <h1 className='TodoCounter'>
            Has Completado <span>{completed}</span> de <span>{total}</span> TODO's
        </h1>
    );
}

export {TodoCounter};