import styled from "styled-components";

const StyledPrimaryContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 37.4375rem;
    background-color: #070724;
    padding: 2.6875rem  1.8125rem 4.25rem 1.1875rem;
`

const StyledSecondaryContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin: 0;
    padding: 0;
`
const StyledPlanetLabel = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 0;

    &::before{
        content: '';
        position: absolute;
        height: 0.0625rem;
        background-color: #979797;
        width: 20.4375rem;
        top: 3.125rem;
    }
`
const StyledPlanet = styled.div`
    display: flex;
    gap: 1.5625rem;
    align-items: center;
`

const StyledCircle = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;
    background-color: aliceblue;
`

const StyledText = styled.h2`
    font-family: "Spartan", sans-serif;
    font-weight: 700;
    font-size: 0.9375rem;
    text-transform: uppercase;
`

export {StyledPrimaryContainer, StyledSecondaryContainer, StyledPlanetLabel, StyledCircle, StyledText, StyledPlanet}