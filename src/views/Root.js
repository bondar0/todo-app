import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Title } from 'components/Title/Title';
import { Wrapper } from './Root.styles';
import Form from 'components/Form/Form';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Title>Todo List</Title>
        <Form />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
