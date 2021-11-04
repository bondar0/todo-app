import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Title } from 'components/Title/Title';
import { Wrapper } from './Root.styles';
import Form from 'components/Form/Form';
import TodoList from 'components/TodoList/TodoList';
import { Alert } from 'components/Alert/Alert';

export const TodoContext = createContext();

const Root = () => {
  const [todos, setTodos] = useState(null);
  const [alert, setAlert] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <TodoContext.Provider value={{ todos, setTodos, alert, setAlert }}>
          {alert ? <Alert>{alert}</Alert> : null}
          <Title>Todo List</Title>
          <Form setAlert={setAlert} setTodos={setTodos} />
          <TodoList alert={alert} todos={todos} />
        </TodoContext.Provider>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
