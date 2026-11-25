import { createContext, useContext, useState, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [tarefas, setTarefas] = useLocalStorage('tarefas', []);
    const [filtro, setFiltro] = useState('todas');

    function adicionarTarefa(texto) {
        const novaTarefa = {
            id: Date.now(),
            texto: texto,
            concluida: false
        };
        setTarefas([...tarefas, novaTarefa]);
    }

    function alternarTarefa(id) {
        setTarefas(tarefas.map(tarefa => {
            if (tarefa.id === id) {
                return { ...tarefa, concluida: !tarefa.concluida };
            }
            return tarefa;
        }));
    }

    function removerTarefa(id) {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    }

    const tarefasFiltradas = useMemo(() => {
        if (filtro === 'concluidas') {
            return tarefas.filter(tarefa => tarefa.concluida);
        }
        if (filtro === 'pendentes') {
            return tarefas.filter(tarefa => !tarefa.concluida);
        }
        return tarefas;
    }, [tarefas, filtro]);

    return (
        <TodoContext.Provider value={{
            tarefas: tarefasFiltradas,
            total: tarefas.length,
            totalPendentes: tarefas.filter(tarefa => !tarefa.concluida).length,
            totalConcluidas: tarefas.filter(tarefa => tarefa.concluida).length,
            filtro,
            setFiltro,
            adicionarTarefa,
            alternarTarefa,
            removerTarefa
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodo() {
    return useContext(TodoContext);
}