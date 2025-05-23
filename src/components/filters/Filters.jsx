import { v4 } from 'uuid';
import { FILTERS } from '../../constants/filters';
import { StyledActivatedText, StyledContainer } from './filters.styled';

const Filters = ({ planetSelected, filter, setFilter }) => {
  return (
    <StyledContainer>
      {FILTERS.map((eachFilter, index) => {
        return (
          <StyledActivatedText
            key={v4()}
            $planet={planetSelected}
            onClick={() => setFilter(index)}
            $filter={filter}
            $eachfilter={index}
          >
            {eachFilter}
          </StyledActivatedText>
        );
      })}
    </StyledContainer>
  );
};

export default Filters;
