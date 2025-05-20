import styled from "styled-components";
import { COLORS } from "../../styles/Color";

const StyledInfoContainer = styled.div`
  border: 1px solid ${COLORS.white900};
  padding: 1rem 1.5rem;
  width: 20.4375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInfoTitle = styled.span`
  color: ${COLORS.white500};
  font-family: 'Spartan', sans-serif;
  text-transform: uppercase;
  line-height: 1rem;
  font-size: 0.5rem;
`;

const StyledInfoValue = styled.span`
    font-size: 1.25rem;
    text-transform: uppercase;
`

export {StyledInfoContainer, StyledInfoTitle, StyledInfoValue}