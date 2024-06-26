import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import {
  Container,
  DateOfEvent,
  Description,
  EventCard,
  IconHand,
  Organizer,
  RegisterWrapper,
  StyledLink,
  Title,
  
} from './EventList.styled';
import RegisterModal from '../RegisterModal/RegisterModal';
import ViewModal from '../ViewModal/ViewModal';
import { useState, useEffect } from 'react';
import { fetchEvents } from '../redux/operations';
import Loader from '../Loader/Loader';

const theme = createTheme({
  palette: {
    pelorous: {
      main: '#1E90FF',
    },
  },
});

const EventList = ({ items }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 12;

  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleOpenRegisterModal = (eventId) => {
    setSelectedEventId(eventId);
    setRegisterModalOpen(true);
  };

  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleOpenViewModal = (eventId) => {
    setSelectedEventId(eventId);
    setViewModalOpen(true);
  };

  useEffect(() => {
    dispatch(fetchEvents({ pageSize, pageNumber }));
  }, [dispatch, pageNumber, pageSize]);

  if (isLoading)
    return (
      
        <Loader />
     
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <ThemeProvider theme={theme}>
    
      <Container>
        {items.map((item) => (
          <EventCard key={item.id}>
            <Title>{item.title}</Title>
            <img
              src={item.img}
              loading="lazy"
              alt={item.title}
              width={180}
              height={130}
              style={{ margin: '0 auto' }}
            />
            <Description>{item.description}</Description>
            <DateOfEvent>
              {new Date(item.eventDate).toLocaleDateString()}{' '}
              {new Date(item.eventDate).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </DateOfEvent>
            <Organizer>{item.organizer}</Organizer>
            <RegisterWrapper>
              <StyledLink onClick={() => handleOpenRegisterModal(item.id)}>
                Register
              </StyledLink>
              <StyledLink onClick={() => handleOpenViewModal(item.id)}>
                View
              </StyledLink>
            </RegisterWrapper>
            <IconHand>
              <PanToolAltIcon style={{ fill: '#ffffff' }} />
            </IconHand>
          </EventCard>
        ))}
        <RegisterModal
          open={registerModalOpen}
          setOpen={setRegisterModalOpen}
          eventId={selectedEventId}
        />
        <ViewModal
          open={viewModalOpen}
          setOpen={setViewModalOpen}
          eventId={selectedEventId}
        />
        <Stack
          spacing={2}
          alignItems="center"
          sx={{ marginTop: 2, margin: '0 auto' }}
        >
          <Pagination
            count={3}
            page={pageNumber + 1}
            color="pelorous"
            onChange={(event, value) => setPageNumber(value - 1)}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default EventList;
