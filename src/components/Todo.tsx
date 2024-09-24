import React from "react";

type TodoProps = {
  todo: {
    id: string;
    title: string;
    status: boolean;
  };
  handleDelClick: (id: string) => void;
};

const Todo: React.FC<TodoProps> = ({ todo, handleDelClick }) => {
  return (
    <li>
      <div className="txt-box">
        <span className="chk-box">
          <input type="checkbox" id={todo.id} />
          <label htmlFor={todo.id}>{todo.title}</label>
        </span>
        <span className="inp-box inp-edit">
          <input type="text" />
        </span>
      </div>
      <div className="btn-box">
        <button className="btn btn-edit">수정</button>
        <button className="btn btn-save">저장</button>
        <button className="btn btn-del" onClick={() => handleDelClick(todo.id)}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default Todo;
