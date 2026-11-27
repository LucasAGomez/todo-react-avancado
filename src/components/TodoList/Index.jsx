import { useTodo } from "../../context/TodoContext";
import { TodoItem } from "../TodoItem";
import { Lista, MensagemVazio } from "./styles";

export function TodoList() {
  const { tarefas, alternarTarefa, removerTarefa } = useTodo();

  if (tarefas.length === 0) {
    return <MensagemVazio>Nenhuma tarefa ainda.</MensagemVazio>;
  }

  return (
    <Lista>
      {tarefas.map((tarefa) => (
        <TodoItem
          key={tarefa.id}
          tarefa={tarefa}
          onAlternar={alternarTarefa}
          onRemover={removerTarefa}
        />
      ))}
    </Lista>
  );
}
