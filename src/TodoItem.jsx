export default function TodoItem ({ id, completed, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <input 
                type="checkbox" 
                id={"item1" + id}
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)} />
            <label htmlFor={"item1" + id}>{title}</label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}