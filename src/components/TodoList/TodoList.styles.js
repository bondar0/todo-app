import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const List = styled.div`
  margin-top: 100px;
  min-width: 420px;
  margin-left: auto;
  margin-right: auto;
`;

export const Paragraph = styled.p`
  color: ${({ tehme }) => theme.colors.white};
  font-weight: 700;
`;
