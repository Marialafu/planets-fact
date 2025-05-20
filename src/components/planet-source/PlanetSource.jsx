import { StyledSourceContainer, StyledSourceLink, StylesSourceTitle } from "./planet-source.styled"


const PlanetSource = ({source}) => {

    return (
        <StyledSourceContainer>
            <StylesSourceTitle>Source:</StylesSourceTitle>
            <StyledSourceLink target='_blank' href={source}>
                  Wikipedia
            </StyledSourceLink>
                <img src='/assets/icon-source.svg' alt='' />
        </StyledSourceContainer>
    )
}

export default PlanetSource