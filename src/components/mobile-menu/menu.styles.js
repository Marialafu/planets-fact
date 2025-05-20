import styled from 'styled-components';
import { COLORS } from '../../styles/Color';

const StyledMenu = styled.ul`
  width: 100%;
  background-color: ${COLORS.primaryColor};
  padding: 2.5rem 1.8125rem 2.5rem 19px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 105.5px;
  gap: 2.5rem;
`;

const StyledMenuItem = styled.li`
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 1.5rem;
  left: 1.875rem;

  &::before {
    content: '';
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${({ $planet }) => $planet.color};
    border-radius: 100%;
    left: -1.875rem;
  }
`;

export { StyledMenu, StyledMenuItem };
