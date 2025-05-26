import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-template-rows: repeat(4, 4fr);
    padding: 0 1.5rem;
  }
`;

export { StyledContainer };
