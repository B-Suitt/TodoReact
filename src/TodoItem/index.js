import "./TodoItem.css"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function TodoItem(props){
    return (
      <li className="TodoItem">

       <span 
          className={`Icon Icon-check ${props.completed && "Icon Icon-check--active"}`}
          onClick={props.onComplete}
          >
          <FaCheck />
          </span>

        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
 
        
        <span className="Icon Icon-delete"
         onClick={props.onDelete}
        >
          <RiDeleteBin6Fill />
        </span>

      </li>
    );
}

export {TodoItem}