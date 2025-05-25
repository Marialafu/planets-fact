import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.875rem;

  @media screen and (min-width: 1400px){
    flex-direction: row;
    padding: 0 10.3125rem;
  }
`;

const StyledPlanetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px){
    width: 25rem;
  }
`

const StyledImgContainer = styled.div`
  padding-top: 2.375rem;
  width: 20.4375rem;
  height: 16.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0;
    width: 45.4375rem;
    height: 16.4375rem;
    position: relative;
    top: -1.875rem;
  }

  @media screen and (min-width: 1400px) {
    position: fixed;
    padding: 0;
    left: 8.4375rem;
    top: 23.75rem;
    height: 28.125rem;
    align-items: self-start;
  }
`;

const StyledImg = styled.img`
  position: relative;
  width: ${({ $planetWidth }) => ($planetWidth) };
  height: auto;

  @media screen and (min-width: 768px) {
    scale: 130%;
  }

  @media screen and (min-width: 1400px) {
    scale: 130%;
    top: 2.5rem;
  }
`;

const StyledGeologyImg = styled.img`
  position: absolute;
  width: 4.375rem;
  bottom: 30%;

  @media screen and (min-width: 768px){
    scale: 170%;
    bottom: 50%;
    top: 12.5rem;
  }
  @media screen and (min-width: 1400px){
    bottom: 50%;
    top: 18.75rem;
    scale: 190%;
  }
`;

const StyledDataInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  @media screen and (min-width: 768px){
    justify-content: flex-start;
  }

  @media screen and (min-width: 1400px){
    align-items: end;
    gap: 18.875rem;
  }
`

export { StyledContainer, StyledImg, StyledImgContainer, StyledGeologyImg, StyledPlanetInfoContainer, StyledDataInfoContainer};
