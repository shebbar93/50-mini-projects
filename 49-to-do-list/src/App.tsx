import React, { useEffect, useState } from "react";

import "./App.css";
interface TodoType {
  text: string;
  completed: boolean;
}
function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const todos: string = localStorage.getItem("todos")!;
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodos = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((x: TodoType[]) => [...x, { text: input, completed: false }]);
    setInput("");
  };
  const markComplete = (toDo: TodoType) => {
    const newArray: TodoType[] = todos.map((x: TodoType) => {
      if (x.text === toDo.text) {
        x.completed = !x.completed;
      }
      return x;
    });
    setTodos(newArray);
  };
  const removeTodo = (e: React.MouseEvent<HTMLLIElement>, toDo: TodoType) => {
    e.preventDefault();
    const newArray: TodoType[] = todos.filter(
      (x: TodoType) => x.text !== toDo.text
    );
    setTodos(newArray);
  };
  return (
    <>
      <h1>todos</h1>
      <form onSubmit={addTodos}>
        <input
          type="text"
          className="input"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your todo"
        />

        <ul className="todos">
          {todos.map((x: TodoType) => (
            <li
              className={`${x.completed ? "completed" : ""}`}
              key={x.text}
              onClick={() => markComplete(x)}
              onContextMenu={(e: React.MouseEvent<HTMLLIElement>) =>
                removeTodo(e, x)
              }
            >
              {x.text}
            </li>
          ))}
        </ul>
      </form>
      <div className="small">
        <span>Left click to toggle completed.</span>
        <span>Right click to delete todo.</span>
      </div>
    </>
  );
}

export default App;
