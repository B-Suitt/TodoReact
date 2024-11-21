import "./TodoList.css";

function TodoList({ children }) {
  return (
    <div className="ListContainer">
      <ul className="TodoList">{children}</ul>
    </div>
  );
}

export { TodoList };
