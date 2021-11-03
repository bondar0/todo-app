import styled from 'styled-components';

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 12px;
  margin: 0;
  position: absolute;
  bottom: -20px;
  left: 0;
`;
