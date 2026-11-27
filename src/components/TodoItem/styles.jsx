import styled from "styled-components";

export const ItemTarefa = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  margin-bottom: 8px;
  min-width: 0;
`;

export const TextoTarefa = styled.span`
  flex: 1;
  min-width: 0;
  overflow-wrap: break-word;
  word-break: break-word;
  text-decoration: ${(props) => (props.$concluida ? "line-through" : "none")};
  color: ${(props) => (props.$concluida ? "#888888" : "#222222")};
`;

export const BotaoRemover = styled.button`
  flex-shrink: 0;
  white-space: nowrap;
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
`;
