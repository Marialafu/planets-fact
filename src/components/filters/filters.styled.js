import styled from "styled-components";
import { COLORS } from "../../styles/Color";

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    position: relative;
    text-transform: uppercase;

    &::before{
    content: '';
    top: 50px;
    right: 0%;
    position: absolute;
    height: 0.0625rem;
    width: 100vw;
    background-color: ${COLORS.white500};
  }
`
const StyledActivatedText = styled.span`
    font-size: 0.5625rem;
    letter-spacing: 0.1206rem;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        top: 1.6875rem;
        width: 5rem;
        height: 0.25rem;
        background-color: ${({ $planet }) => $planet.color}; 
    }
`

const StyledText = styled.span`
    font-size: 0.5625rem;
    color: ${COLORS.white500};
    letter-spacing: 0.1206rem;
`

export {StyledContainer, StyledActivatedText, StyledText}
