import { memo } from "react";
import { ItemTarefa, TextoTarefa, BotaoRemover } from "./styles";

export const TodoItem = memo(function TodoItem({
  tarefa,
  onAlternar,
  onRemover,
}) {
  return (
    <ItemTarefa>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => onAlternar(tarefa.id)}
      />
      <TextoTarefa $concluida={tarefa.concluida}>{tarefa.texto}</TextoTarefa>
      <BotaoRemover onClick={() => onRemover(tarefa.id)}>Remover</BotaoRemover>
    </ItemTarefa>
  );
});
