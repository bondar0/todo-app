import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 13px 10px;
  border-radius: 10px;
  border: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  min-width: 120px;
  box-shadow: 0 12px 7px -5px rgba(0, 0, 0, 0.35);
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple};
  position: relative;
  top: -5px;
  transition: box-shadow 0.2s, top 0.2s;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.35);
    top: 0;
  }

  &.btn-edit {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;
