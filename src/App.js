import React, { useState } from "react";
import "./App.css";
import CustomChatbot from "./components/chatbot/CustomChatbot";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={
        { 
          textDecoration: todo.isCompleted ? "line-through"  : " "
      }
    }
    >
      {todo.text}

      <div>
        <button className="b1" onClick={() => completeTodo(index)}>Complete</button>
        <button className="c" onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Room No: 208 - Tubelight not working",
      isCompleted: false
    },
    {
      text: "Room No: 205 - Water leakage",
      isCompleted: false
    },
    {
      text: "Room No: 207 - Fan not working",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    if(newTodos[index].isCompleted !==true)
        newTodos[index].isCompleted=true;
    else
      newTodos[index].isCompleted=false;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
        <CustomChatbot/>
      </div>
    </div>
  );
}

export default App;