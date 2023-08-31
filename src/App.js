import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      return;
    }

    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const handleTodoClick = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>추가하기</button>
      </div>
      <div className="title">Todo List</div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div
            className="todo-item"
            key={index}
            onClick={() => handleTodoClick(index)}
          >
            <div className="todo-text">{todo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
