import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

export function TodoForm() {
    const [texto, setTexto] = useState('');
    const { adicionarTarefa } = useTodo();

    function enviar(evento) {
        evento.preventDefault();
        if (texto.trim() === '') return;
        adicionarTarefa(texto);
        setTexto('');
    }

    return (
        <form className="formulario" onSubmit={enviar}>
            <input
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Digite uma tarefa..."
            />
            <button className="botao" type="submit">Adicionar</button>
        </form>
    );
}