import {
  SortWrapper,
  StyledLabel,
  StyledOption,
  StyledSelected,
} from './SortEvents.sryled';

const SortEvents = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };
  return (
    <SortWrapper>
      <StyledLabel htmlFor="sort">Sort by: </StyledLabel>
      <StyledSelected id="sort" onChange={handleSortChange}>
        <StyledOption value="title">Title</StyledOption>
        <StyledOption value="date">Event Date</StyledOption>
        <StyledOption value="organizer">Organizer</StyledOption>
      </StyledSelected>
    </SortWrapper>
  );
};

export default SortEvents;
