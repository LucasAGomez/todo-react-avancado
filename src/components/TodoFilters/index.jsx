import { useTodo } from "../../context/TodoContext";
import { Filtros, BotaoFiltro } from "./styles";

export function TodoFilters() {
  const { filtro, setFiltro, total, totalPendentes, totalConcluidas } =
    useTodo();

  return (
    <Filtros>
      <BotaoFiltro
        $ativo={filtro === "todas"}
        onClick={() => setFiltro("todas")}
      >
        Todas ({total})
      </BotaoFiltro>
      <BotaoFiltro
        $ativo={filtro === "pendentes"}
        onClick={() => setFiltro("pendentes")}
      >
        Pendentes ({totalPendentes})
      </BotaoFiltro>
      <BotaoFiltro
        $ativo={filtro === "concluidas"}
        onClick={() => setFiltro("concluidas")}
      >
        Concluídas ({totalConcluidas})
      </BotaoFiltro>
    </Filtros>
  );
}
