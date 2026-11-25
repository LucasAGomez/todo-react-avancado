import { TodoProvider } from './context/TodoContext';
import { TodoForm } from './components/TodoForm';
import { TodoFilters } from './components/TodoFilters';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <main className="container">
        <h1>Todo List Avançada</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </main>
    </TodoProvider>
  );
}

export default App;