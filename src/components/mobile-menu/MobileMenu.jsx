import { Link } from "react-router-dom"
import { StyledCircle, StyledPlanet, StyledPlanetLabel, StyledPrimaryContainer, StyledSecondaryContainer, StyledText } from "./menu.styles";

const MobileMenu = () => {
    return (
        <StyledPrimaryContainer>
            <StyledSecondaryContainer>
                <StyledPlanetLabel>
                    <Link to='/src/pages/planet/Planet.jsx'/>
                    <StyledPlanet>
                        <StyledCircle />
                        <StyledText>Planeta</StyledText>
                    </StyledPlanet>
                    <img src="/assets/icon-chevron.svg" alt="" />
                </StyledPlanetLabel>
            </StyledSecondaryContainer>
        </StyledPrimaryContainer>
    )

}

export default MobileMenu;