import { v4 } from "uuid"
import { FILTERS } from "../../constants/filters"
import { StyledActivatedText, StyledContainer, StyledText } from "./filters.styled"

const Filters = ({planet, filter, setFilter}) => {

    return (
    <StyledContainer>

        {FILTERS.map(eachFilter => {

            if (eachFilter.value === filter){
            return (
            <StyledActivatedText key={v4()} $planet={planet}
            onClick={() => setFilter(eachFilter.value)}
            >
            {eachFilter.name}
            </StyledActivatedText>) 
            } else {
            return (
            <StyledText key={v4()} $planet={planet}
            onClick={() => setFilter(eachFilter.value)}
            >
            {eachFilter.name}
            </StyledText>) 
            }
            
        })}

    </StyledContainer>
        
    )

}

export default Filters