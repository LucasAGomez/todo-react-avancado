import { memo } from 'react';
import { useTodo } from '../context/TodoContext';

export const TodoItem = memo(function TodoItem({ tarefa }) {
  const { alternarTarefa, removerTarefa } = useTodo();

  return (
    <li className="tarefa">
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => alternarTarefa(tarefa.id)}
      />
      <span className={tarefa.concluida ? 'concluida' : ''}>
        {tarefa.texto}
      </span>
      <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
    </li>
  );
});