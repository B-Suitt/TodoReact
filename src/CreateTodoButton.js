import './CreateTodoButton.css';

function CreateTodoButton(){
    return (

      //Los eventos son casi iguales pero mas simplificados
      <button className="CreateTodoButton"
      onClick={ 
        (event)=> {
          console.log('le diste click al boton')
          console.log(event)
          console.log(event.target)
          
        }
      }>
        +</button>
    );
}

export {CreateTodoButton}