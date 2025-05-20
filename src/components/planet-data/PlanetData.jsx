import { v4 } from "uuid";
import { DATA_VALUES } from "../../constants/data-values"
import { StyledInfoContainer, StyledInfoTitle, StyledInfoValue } from "./planet-data.styled"

const PlanetData = ({rotation, revolution, radius, averageTemp}) => {

    return (
    <>
    {/* {DATA_VALUES.map(value => 
        <StyledInfoContainer key={v4()}>
            <StyledInfoTitle>{value}</StyledInfoTitle>
            <StyledInfoValue>58.6 days</StyledInfoValue>
        </StyledInfoContainer>
    )} */}

    <StyledInfoContainer>
        <StyledInfoTitle>ROTATION TIME</StyledInfoTitle>
        <StyledInfoValue>{rotation} days</StyledInfoValue>
    </StyledInfoContainer>

    <StyledInfoContainer>
        <StyledInfoTitle>REVOLUTION TIME</StyledInfoTitle>
        <StyledInfoValue>{revolution} days</StyledInfoValue>
    </StyledInfoContainer>

    <StyledInfoContainer>
        <StyledInfoTitle>RADIUS</StyledInfoTitle>
        <StyledInfoValue>{radius} km</StyledInfoValue>
    </StyledInfoContainer>

    <StyledInfoContainer>
        <StyledInfoTitle>AVERAGE TEMP.</StyledInfoTitle>
        <StyledInfoValue>{averageTemp} °C</StyledInfoValue>
    </StyledInfoContainer>
    </>
    )

}
export default PlanetData