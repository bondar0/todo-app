import styled from 'styled-components';

export const ListItem = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;
