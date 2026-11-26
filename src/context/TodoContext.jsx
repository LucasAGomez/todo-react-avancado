import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [tarefas, setTarefas] = useLocalStorage('tarefas', []);
  const [filtro, setFiltro] = useState('todas');

  const adicionarTarefa = useCallback((texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false
    };
    setTarefas((prev) => [...prev, novaTarefa]);
  }, [setTarefas]);

  const alternarTarefa = useCallback((id) => {
    setTarefas((prev) => prev.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    }));
  }, [setTarefas]);

  const removerTarefa = useCallback((id) => {
    setTarefas((prev) => prev.filter(tarefa => tarefa.id !== id));
  }, [setTarefas]);

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