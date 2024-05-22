import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParticipants } from '../redux/operations';
import ParticipantsList from '../ParticipantsList/ParticipantsList';
import { selectEvents, selectFilteredParticipants } from '../redux/selectors';
import { TextWrapper, StyledText, StyledTextField } from './ViewModal.styled';
import CloseIcon from '@mui/icons-material/Close';
import Loader from '../Loader/Loader';
import { setFilter } from '../redux/filterSlice';

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
    selectFilteredParticipants(state).filter(
      (participant) => participant.eventId === eventId
    )
  );
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (eventId) {
      dispatch(fetchParticipants(eventId));
    }
  }, [dispatch, eventId]);

  const handleSearchChange = (e) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: 'fixed',
              top: '6%',
              left: '93%',
              transform: 'translate(-50%, -50%)',
              width: 32,
              height: 32,
              cursor: 'pointer',
            }}
          />
          <Typography sx={{ color: '#1e90ff' }} variant="h4" component="h3">
            {event ? `${event.title} participants` : <Loader />}{' '}
          </Typography>
          <div style={{position:"relative"}}>
          <StyledTextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Search by full name"
            name="fullName"
            onChange={handleSearchChange}
          

           
          />
          <SearchIcon 
          sx={{ position:"absolute",
top:"30px",
right: "20px",
color: "#1256da",
        }}
         
          />
          </div>
          <div style={{position: "relative"}}>
          <StyledTextField
            fullWidth
            margin="normal"
            variant="outlined"
            placeholder="Search by email"
            name="email"
            onChange={handleSearchChange}
          />
           <SearchIcon 
          sx={{ position:"absolute",
top:"30px",
right: "20px",
color: "#1256da",
        }}
         
          />
          </div>
          
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
