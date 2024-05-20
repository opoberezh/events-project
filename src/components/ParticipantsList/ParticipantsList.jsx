// import { useSelector } from 'react-redux';
// import { selectParticipants } from '../redux/selectors';

import { Wrapper, StyledList, StyledItems } from './ParticipantsList.styled';

const ParticipantsList = ({ eventId, registrations }) => {
  // if (!registrations || registrations.length === 0) {
  //   return <p>There are no participants yet</p>;
  // }
  const eventRegistrations = registrations.filter(
    (registration) => registration.eventId === eventId
  );

  return (
    <Wrapper>
      <StyledList>
        {eventRegistrations.map((registration) => (
          <StyledItems key={registration.id}>
            <div>
              <strong>{registration.fullName}</strong>
            </div>
            <div>
              <strong>{registration.email}</strong>
            </div>
          </StyledItems>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default ParticipantsList;
