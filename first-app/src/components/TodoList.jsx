export default function TodoList({ todos }) {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
  