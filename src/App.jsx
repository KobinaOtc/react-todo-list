import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState('');
  // setNewItem('Learn React');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    })
    setNewItem('');
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

  // console.log(todos);
  return (
    <>
      <form onSubmit ={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
        <h1>Todo List</h1>
        <ul className="list">
          {todos.map(todo => {
            return (
                <li key={todo.id}>
                  <input 
                  type="checkbox" 
                  id={"item1" + todo.id}
                  onChange={e => toggleTodo(todo.id, e.target.checked)} />
                  <label htmlFor={"item1" + todo.id}>{todo.title}</label>
                  <button className="btn btn-danger">Delete</button>
                </li>
              )
            }
          )}
        </ul>
      </form>
    </>
  )
}
