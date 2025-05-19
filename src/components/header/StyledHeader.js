import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
`;

const StyledTitle = styled.h1`
  font-size: 1.75rem;
`;

const StyledImg = styled.img`
  color: ${({$openMenu}) => $openMenu ? 'white' : 'black'};
`

export { StyledHeader, StyledTitle, StyledImg };
