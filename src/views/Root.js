import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Title } from 'components/Title/Title';
import { Wrapper } from './Root.styles';
import Form from 'components/Form/Form';
import TodoList from 'components/TodoList/TodoList';
import { Alert } from 'components/Alert/Alert';

export const TodoContext = createContext({
  value: null,
  setValue: () => {},
  alert: '',
  setAlert: () => {},
  taskName: '',
  setTaskName: () => {},
  visibleEditBtn: false,
  setVisibleEditBtn: () => {},
});

const Root = () => {
  const [value, setValue] = useState(null);
  const [alert, setAlert] = useState('');
  const [taskId, setTaskId] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [visibleEditBtn, setVisibleEditBtn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <TodoContext.Provider
          value={{
            value,
            setValue,
            alert,
            setAlert,
            taskId,
            setTaskId,
            taskName,
            setTaskName,
            visibleEditBtn,
            setVisibleEditBtn,
          }}
        >
          {alert ? <Alert>{alert}</Alert> : null}
          <Title>Todo List</Title>
          <Form />
          <TodoList />
        </TodoContext.Provider>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
