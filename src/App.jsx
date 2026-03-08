import { useState, useEffect, use } from "react"
import NewTodoForm from "./NewTodoForm.jsx"
import "./styles.css"
import TodoList from "./TodoList.jsx";

export default function App() {
  // setNewItem('Learn React');
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      console.log(id);
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  // console.log(todos);
  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}
