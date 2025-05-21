import styled from 'styled-components';
import { COLORS } from '../../styles/Color';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  position: relative;
  text-transform: uppercase;

  &::before {
    content: '';
    top: 50px;
    right: 0%;
    position: absolute;
    height: 0.0625rem;
    width: 100vw;
    background-color: ${COLORS.white500};
  }
`;
const StyledActivatedText = styled.span`
  font-family: ' Spartan', sans-serif;
  font-size: 11px;
  letter-spacing: 0.1206rem;
  color: ${({ $filter, $eachfilter }) =>
    $filter === $eachfilter ? 'white' : 'grey'};
  position: relative;
  width: fit-content;

  &::before {
    content: '';
    position: absolute;
    top: 1.6875rem;
    height: 0.25rem;
    width: 110%;
    left: -3%;
    background-color: ${({ $planet, $filter, $eachfilter }) =>
      $filter === $eachfilter ? $planet.color : 'transparent'};
  }
`;

export { StyledContainer, StyledActivatedText };
