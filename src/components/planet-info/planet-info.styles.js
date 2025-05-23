import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.875rem;
`;

const StyledPlanetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px){
    width: 20.625rem;
  }
`

const StyledImgContainer = styled.div`
  padding-top: 2.375rem;
  width: 20.4375rem;
  height: 16.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  position: relative;
  width: ${({ $planetWidth }) => $planetWidth};
  height: auto;
`;

const StyledGeologyImg = styled.img`
  position: absolute;
  width: 4.375rem;
  bottom: 30%;

  @media screen and (min-width: 768px){
    bottom: 50%;
  }
`;

const StyledDataInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  @media screen and (min-width: 768px){
    justify-content: flex-start;
  }
`

export { StyledContainer, StyledImg, StyledImgContainer, StyledGeologyImg, StyledPlanetInfoContainer, StyledDataInfoContainer};
