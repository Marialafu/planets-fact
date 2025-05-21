import styled from 'styled-components';
import { COLORS } from '../../styles/Color';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  position: relative;

  &::before {
    content: '';
    top: 105px;
    right: 0%;
    position: absolute;
    height: 0.0625rem;
    width: 100vw;
    background-color: ${COLORS.white500};
  }
`;

const StyledTitle = styled.h1`
  font-size: 1.75rem;
`;

const StyledImg = styled.img`
  opacity: ${({ $openMenu }) => ($openMenu ? '50%' : '100%')};
`;

export { StyledHeader, StyledTitle, StyledImg };
