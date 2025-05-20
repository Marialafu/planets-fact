import styled from 'styled-components';
import { COLORS } from '../../styles/Color';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 100px;
  height: auto;
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const StyledSourceContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.75rem;
`;

const StylesSourceTitle = styled.span`
  font-weight: 100;
  font-family: 'Spartan', sans-serif;
  font-size: 0.75rem;
  color: ${COLORS.white500};
`;

const StyledSourceLink = styled.a`
  font-weight: 700;
  font-family: 'Spartan', sans-serif;
  text-decoration: underline;
  font-size: 0.75rem;
  color: ${COLORS.white500};
`;

const StyledInfoContainer = styled.div`
  border: 1px solid ${COLORS.white900};
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInfoTitle = styled.span`
  color: ${COLORS.white500};
  font-family: 'Spartan', sans-serif;
  line-height: 1rem;
  font-size: 0.5rem;
`;

export {
  StyledContainer,
  StyledImg,
  StyledDescriptionContainer,
  StyledTitle,
  StyledText,
  StyledSourceContainer,
  StylesSourceTitle,
  StyledSourceLink,
  StyledInfoContainer,
  StyledInfoTitle
};
