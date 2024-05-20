// import { useSelector } from 'react-redux';
// import { selectParticipants } from '../redux/selectors';

const ParticipantsList = ({ eventId, registrations }) => {
  // if (!registrations || registrations.length === 0) {
  //   return <p>There are no participants yet</p>;
  // }
  const eventRegistrations = registrations.filter(
    (registration) => registration.eventId === eventId
  );

  return (
    <div>
      <ul>
        {eventRegistrations.map((registration) => (
          <li key={registration.id}>
            <div>
              <strong>{registration.fullName}</strong>
            </div>
            <div>
              <strong>{registration.email}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantsList;
