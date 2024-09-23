import { ChangeEvent, FormEvent, useState } from "react";
import "./assets/scss/App.scss";

type Todo = {
  id: string;
  title: string;
  status: boolean;
};

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
      id: String(new Date().getTime()),
      title: input,
      status: false
    };
    setTodos([...todos, newTodo]);
    setInput("");
  }

  function handleDelClick(id: string) {
    setTodos(todos.filter((el) => el.id !== id));
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
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
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
                  <button
                    className="btn btn-del"
                    onClick={() => {
                      handleDelClick(todo.id);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
