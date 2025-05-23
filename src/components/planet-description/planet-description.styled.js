import styled from "styled-components";

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px){
    justify-content: flex-start;
    align-items: first baseline;
  }
`;

const StyledTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const StyledText = styled.p`
  font-size: 0.6875rem;
  line-height: 1.375rem;
  margin-bottom: 2rem;
  margin: 0;
`;

export {StyledDescriptionContainer, StyledTitle, StyledText}