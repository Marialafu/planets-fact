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

const StyledImgContainer = styled.div`
  padding-top: 2.375rem;
  width: 20.4375rem;
  height: 16.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledImg = styled.img`
  width: ${({$planetLink}) => $planetLink}%;
  height: auto;
`;

const StyledGeologyImg = styled.img`
  position: absolute;
  width: 4.375rem;
  bottom: 300px;
`

export {
  StyledContainer,
  StyledImg,
  StyledImgContainer,
  StyledGeologyImg
};
