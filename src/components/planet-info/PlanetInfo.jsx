import PlanetData from '../planet-data/PlanetData';
import PlanetDescription from '../planet-description/PlanetDescription';
import PlanetSource from '../planet-source/PlanetSource';
import {
  StyledImg,
  StyledContainer,
  StyledImgContainer,
  StyledGeologyImg,
} from './planet-info.styles';

const PlanetInfo = ({planet, filter, planetLink}) => {
  console.log(planetLink.size);
  

  const img = defineImg(filter, planet)
  
  return (
    <StyledContainer>
    
    <StyledImgContainer>
        <StyledImg src={img} $planetLink={planetLink.size} />
        {filter === 2 && <StyledGeologyImg $planet={planet} src={planet.geologyImg} />}
    </StyledImgContainer>
    
    <PlanetDescription {...planet} filter={filter}/>
    <PlanetSource {...planet} />
    <PlanetData {...planet}/>

    </StyledContainer>
  );
};

const defineImg = (filter, planet) => {
  console.log(filter);
  if (filter === 1){
    return planet.internalImg
  } else{
    return planet.planetImg
  }
}

export default PlanetInfo;
