import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import { fetchParticipants } from '../redux/operations';
import ParticipantsList from '../ParticipantsList/ParticipantsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvents, selectParticipants } from '../redux/selectors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ViewModal({ open, setOpen, eventId }) {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const event = events.find((event) => event.id === eventId);
  const participants = useSelector((state) =>
    selectParticipants(state).filter(
      (participant) => participant.eventId === eventId
    )
  );
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (eventId) {
      dispatch(fetchParticipants(eventId));
    }
  }, [dispatch, eventId]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {event ? `${event.title} participants` : 'Loading...'}{' '}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {participants.length > 0 ? (
              <ParticipantsList
                eventId={eventId}
                registrations={participants}
              />
            ) : (
              <div>
                <p>There are no participants yet</p>
              </div>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
