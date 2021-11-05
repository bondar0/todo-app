import styled from 'styled-components';

export const Alert = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 111;
  min-width: 30%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: 700;
`;
