import styled from "styled-components";

export const Filtros = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const BotaoFiltro = styled.button`
  flex: 1 1 auto;
  white-space: nowrap;
  padding: 8px;
  border: 1px solid #222222;
  border-radius: 8px;
  background-color: ${(props) => (props.$ativo ? "#222222" : "#ffffff")};
  color: ${(props) => (props.$ativo ? "#ffffff" : "#222222")};
  cursor: pointer;
`;
