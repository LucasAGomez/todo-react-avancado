import styled from "styled-components";

export const Formulario = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const InputTexto = styled.input`
  flex: 1;
  min-width: 0;
  padding: 10px;
  border: 1px solid #222222;
  border-radius: 8px;
`;

export const BotaoAdicionar = styled.button`
  background-color: #7c5cff;
  color: #ffffff;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
`;
