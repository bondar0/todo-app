import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const List = styled.div`
  margin-top: 100px;
  min-width: 420px;
  margin-left: auto;
  margin-right: auto;

  &.loading {
    position: relative;

    &::after {
      content: 'Loading...';
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
      opacity: 0.5;
      font-weight; 700;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 30px;
      height: 100%;
    }
  }
`;

export const Paragraph = styled.p`
  color: ${({ tehme }) => theme.colors.white};
  font-weight: 700;
`;
