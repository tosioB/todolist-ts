import { ChangeEvent, FormEvent, useState } from "react";
import "./App.scss";

export interface Todo {
  id: number;
  title: string;
  status: boolean;
}

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleAddClick() {
    const newTodo: Todo = {
      id: Number(new Date()),
      title: input,
      status: false
    };
    setTodos([...todos, newTodo]);
    setInput("");
  }

  return (
    <>
      <div className="todolist">
        <h1 className="main-title">Todolist</h1>

        {/* todolist-form */}
        <form className="todolist-form" onSubmit={handleSubmit}>
          <span className="inp-box">
            <input type="text" value={input} onChange={handleInput} />
            <button className="btn add-btn" onClick={handleAddClick}>
              추가
            </button>
          </span>
        </form>

        {/* todolist-box */}
        <ul className="todolist-box">
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="txt-box">
                <span className="chk-box">
                  <input type="checkbox" />
                </span>
                <p className="title">{todo.title}</p>
              </div>
              <div className="btn-box">
                <button className="btn edit-btn">수정</button>
                <button className="btn del-btn">삭제</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
