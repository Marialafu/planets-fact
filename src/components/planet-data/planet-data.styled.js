import styled from "styled-components";
import { COLORS } from "../../styles/Color";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 768px){
    flex-direction: row;
    gap: 0.6875rem;
  }
`

const StyledInfoContainer = styled.div`
  border: 1px solid ${COLORS.white900};
  padding: 1rem 1.5rem;
  width: 20.4375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px){
    width: 10.25rem;
    flex-direction: column;
    gap: 0.375rem;
    padding: 1rem 0.9375rem;
    align-items: first baseline;

  }
`;

const StyledInfoTitle = styled.span`
  color: ${COLORS.white500};
  font-family: 'Spartan', sans-serif;
  text-transform: uppercase;
  line-height: 1rem;
  font-size: 0.625rem;
`;

const StyledInfoValue = styled.span`
    font-size: 1.25rem;
    text-transform: uppercase;
`

export {StyledContainer, StyledInfoContainer, StyledInfoTitle, StyledInfoValue}