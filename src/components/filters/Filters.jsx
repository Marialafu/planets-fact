import { v4 } from 'uuid';
import { FILTERS } from '../../constants/filters';
import { StyledActivatedText, StyledContainer } from './filters.styled';

const Filters = ({ planet, filter, setFilter }) => {
  return (
    <StyledContainer>
      {FILTERS.map(eachFilter => {
        return (
          <StyledActivatedText
            key={v4()}
            $planet={planet}
            onClick={() => setFilter(eachFilter.value)}
            $filter={filter}
            $eachfilter={eachFilter}
          >
            {eachFilter.name}
          </StyledActivatedText>
        );
      })}
    </StyledContainer>
  );
};

export default Filters;
