# todo-react-avancado

Lista de tarefas com React avançado: Context API, hook customizado e memoization.

## Tecnologias

- React + Vite
- Context API / useContext
- useState, useEffect, useMemo, React.memo
- Hook customizado useLocalStorage
- styled-component
- CSS Mobile First

## Como rodar

git clone https://github.com/LucasAGomez/todo-react-avancado
cd todo-react-avancado
npm install
npm run dev

## Estrutura de arquivos

todo-react-avancado/
├── src/
│ ├── components/
│ │ ├── TodoForm/
│ │ │ ├── index.jsx
│ │ │ └── styles.jsx
│ │ ├── TodoItem/
│ │ │ ├── index.jsx
│ │ │ └── styles.jsx
│ │ ├── TodoList/
│ │ │ ├── index.jsx
│ │ │ └── styles.jsx
│ │ └── TodoFilters/
│ │ ├── index.jsx
│ │ └── styles.jsx
│ ├── context/
│ │ └── TodoContext.jsx
│ ├── hooks/
│ │ └── useLocalStorage.js
│ ├── App.jsx
│ └── main.jsx
