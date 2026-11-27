import { TodoProvider } from "./context/TodoContext";
import { TodoForm } from "./components/TodoForm";
import { TodoFilters } from "./components/TodoFilters";
import { TodoList } from "./components/TodoList";
import styled from "styled-components";

export const Container = styled.main`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
`;

export const Titulo = styled.h1`
  text-align: center;
  font-size: 24px;
`;

function App() {
  return (
    <TodoProvider>
      <Container>
        <Titulo>Todo List Avançada</Titulo>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </Container>
    </TodoProvider>
  );
}

export default App;
