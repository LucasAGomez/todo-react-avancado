import { useTodo } from '../context/TodoContext';

export function TodoFilters() {
    const { filtro, setFiltro, total, totalPendentes, totalConcluidas } = useTodo();

    return (
        <div className="filtros">
            <button onClick={() => setFiltro('todas')} className={filtro === 'todas' ? 'ativo' : ''}>Todas ({total})</button>
            <button onClick={() => setFiltro('pendentes')} className={filtro === 'pendentes' ? 'ativo' : ''}>Pendentes ({totalPendentes})</button>
            <button onClick={() => setFiltro('concluidas')} className={filtro === 'concluidas' ? 'ativo' : ''}>Concluídas ({totalConcluidas})</button>
        </div>
    );
}