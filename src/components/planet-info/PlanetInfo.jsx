import { FILTERS_INFO } from '../../constants/filters';
import PlanetData from '../planet-data/PlanetData';
import PlanetDescription from '../planet-description/PlanetDescription';
import PlanetSource from '../planet-source/PlanetSource';
import {
  StyledImg,
  StyledContainer,
  StyledImgContainer,
  StyledGeologyImg,
  StyledPlanetInfoContainer,
  StyledDataInfoContainer
} from './planet-info.styles';

const PlanetInfo = ({ planetName, planetSelected, filter }) => {
  const src = planetSelected.images[filter];
  const img = filter === FILTERS_INFO.surface ? src.main : src;

  return (
    <StyledContainer>
      <StyledImgContainer>
        <StyledImg
          src={img}
          $planetWidth={planetSelected.planetWidth}
        />
        {filter === FILTERS_INFO.surface && (
          <StyledGeologyImg src={src.geology} />
        )}
      </StyledImgContainer>

      <StyledDataInfoContainer>
        <StyledPlanetInfoContainer>
          <PlanetDescription
            {...planetSelected}
            filter={filter}
            planetName={planetName}
          />
          <PlanetSource {...planetSelected} />
        </StyledPlanetInfoContainer>

        <PlanetData {...planetSelected} />
      </StyledDataInfoContainer>
    </StyledContainer>
  );
};

export default PlanetInfo;
