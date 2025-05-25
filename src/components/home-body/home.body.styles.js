import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6.5938rem);
  padding: 0 1rem;

  @media screen and (min-width: 768px){
    height: calc(100vh - 9.375rem);
  }

  @media screen and (min-width: 1400px){
    height: calc(100vh - 13.125rem);
  }
`;

const StyledImg = styled.img`
  @media screen and (min-width: 1400px){
    width: 70%;
  }
`

export { StyledContainer, StyledImg };
