import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Title } from 'components/Title/Title';
import { Wrapper } from './Root.styles';
import Form from 'components/Form/Form';
import TodoList from 'components/TodoList/TodoList';

export const TodoContext = createContext();

const Root = () => {
  const [todos, setTodos] = useState({});

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Title>Todo List</Title>
        <TodoContext.Provider value={{ todos, setTodos }}>
          <Form setTodos={setTodos} />
          <TodoList todos={todos} />
        </TodoContext.Provider>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
