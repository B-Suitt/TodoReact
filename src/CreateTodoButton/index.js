import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}){
    return (

      //Los eventos son casi iguales pero mas simplificados
      <button className="CreateTodoButton"
      onClick={ 
        ()=> {
          setOpenModal(state => !state)        
        }
      }
      >+
</button>
    );
}

export {CreateTodoButton}