import './App.css';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

function App() {
  return (
    <main>
      <h1 className="main-title">To Do List</h1>
      <TodoForm/>
      <TodoList/>
    </main>
  );
}

export default App;
