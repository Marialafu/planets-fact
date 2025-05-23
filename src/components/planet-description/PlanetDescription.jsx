import {
  StyledDescriptionContainer,
  StyledText,
  StyledTitle
} from './planet-description.styled';

const PlanetDescription = ({ planetName, texts, filter }) => {
  return (
    <StyledDescriptionContainer>
      <StyledTitle>{planetName}</StyledTitle>
      <StyledText>{texts[filter]}</StyledText>
    </StyledDescriptionContainer>
  );
};

export default PlanetDescription;
