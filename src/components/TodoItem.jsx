import { memo } from 'react';

export const TodoItem = memo(function TodoItem({ tarefa, onAlternar, onRemover }) {
  return (
    <li className="tarefa">
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => onAlternar(tarefa.id)}
      />
      <span className={tarefa.concluida ? 'concluida' : ''}>
        {tarefa.texto}
      </span>
      <button onClick={() => onRemover(tarefa.id)}>Remover</button>
    </li>
  );
});