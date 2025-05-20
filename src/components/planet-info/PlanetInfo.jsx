import {
  StyledImg,
  StyledDescriptionContainer,
  StyledTitle,
  StyledText,
  StyledSourceContainer,
  StylesSourceTitle,
  StyledContainer,
  StyledSourceLink,
  StyledInfoContainer,
  StyledInfoTitle
} from './planet-info.styles';

const PlanetInfo = ({ name, planetImg, description, source }) => {
  return (
    <StyledContainer>
      <StyledImg src={planetImg} />

      <StyledDescriptionContainer>
        <StyledTitle>{name}</StyledTitle>
        <StyledText>{description}</StyledText>
      </StyledDescriptionContainer>

      <StyledSourceContainer>
        <StylesSourceTitle>Source:</StylesSourceTitle>
        <StyledSourceLink target='_blank' href={source}>
          Wikipedia
        </StyledSourceLink>
        <img src='/assets/icon-source.svg' alt='' />
      </StyledSourceContainer>

      <StyledInfoContainer>
        <StyledInfoTitle>ROTATION TIME</StyledInfoTitle>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

export default PlanetInfo;
