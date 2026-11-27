import { useState } from "react";
import { useTodo } from "../../context/TodoContext";
import { Formulario, InputTexto, BotaoAdicionar } from "./styles";

export function TodoForm() {
  const [texto, setTexto] = useState("");
  const { adicionarTarefa } = useTodo();

  function enviar(evento) {
    evento.preventDefault();
    if (texto.trim() === "") return;
    adicionarTarefa(texto);
    setTexto("");
  }

  return (
    <Formulario onSubmit={enviar}>
      <InputTexto
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma tarefa..."
      />
      <BotaoAdicionar type="submit">Adicionar</BotaoAdicionar>
    </Formulario>
  );
}
