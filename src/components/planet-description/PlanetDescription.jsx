import { StyledDescriptionContainer, StyledText, StyledTitle } from "./planet-description.styled"

const PlanetDescription = ({name, description}) => {

    return (
        <StyledDescriptionContainer>
        <StyledTitle>{name}</StyledTitle>
        <StyledText>{description}</StyledText>
      </StyledDescriptionContainer>
    )

}

export default PlanetDescription