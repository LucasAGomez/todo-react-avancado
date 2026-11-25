import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export function TodoList() {
    const { tarefas } = useTodo();

    if (tarefas.length === 0) {
        return <p className="vazio">Nenhuma tarefa ainda.</p>
    }

    return (
        <ul className="lista">
            {tarefas.map(tarefa => (
                <TodoItem key={tarefa.id} tarefa={tarefa} />
            ))}
        </ul>
    );
}