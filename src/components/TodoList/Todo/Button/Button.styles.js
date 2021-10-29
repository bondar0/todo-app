import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const Btn = styled.button`
  background-color: ${({ theme, isDelete }) =>
    isDelete ? theme.colors.red : theme.colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  min-width: 46px;
  height: 46px;
  min-height: 46px;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin-left: ${({ isDelete }) => (isDelete ? 'auto' : null)};

  svg path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;
