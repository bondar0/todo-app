import styled from 'styled-components';

export const Input = styled.input`
  min-width: 300px;
  border-radius: 10px;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 14px 15px;
  border: 0;
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.colors.white};

  &.error {
    border: 1px solid ${({ theme }) => theme.colors.red};
  }
`;
