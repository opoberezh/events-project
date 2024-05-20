import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import { fetchParticipants } from '../redux/operations';
import ParticipantsList from '../ParticipantsList/ParticipantsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvents, selectParticipants } from '../redux/selectors';
import { TextWrapper, StyledText } from './ViewModal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 566,
  height: 600,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 8,
  p: 6,
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
          <Typography variant="h4" component="h3">
            {event ? `${event.title} participants` : 'Loading...'}{' '}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {participants.length > 0 ? (
              <ParticipantsList
                eventId={eventId}
                registrations={participants}
              />
            ) : (
              <TextWrapper>
                <StyledText>Oops...</StyledText>
                <StyledText> There are no participants yet</StyledText>
              </TextWrapper>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
