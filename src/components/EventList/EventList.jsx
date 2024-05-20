import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectEvents, selectIsLoading } from '../redux/selectors';
import { eventActions } from '../redux/eventsSlice';
import { useEffect, useState } from 'react';
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

const theme = createTheme({
  palette: {
    pelorous: {
      main: '#1E90FF',
    },
  },
});

const EventList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectEvents);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 12;

  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  // Створюємо стан для відстеження id події для реєстрації
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleOpenRegisterModal = (eventId) => {
    setSelectedEventId(eventId);
    setRegisterModalOpen(true);
  };

  useEffect(() => {
    dispatch(eventActions.fetchEvents({ pageSize, pageNumber }));
  }, [dispatch, pageNumber, pageSize]);

  if (isLoading) return <div>Loading...</div>;
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
            <DateOfEvent>{item.eventDate}</DateOfEvent>
            <Organizer>{item.organizer}</Organizer>
            <RegisterWrapper>
              <StyledLink onClick={() => handleOpenRegisterModal(item.id)}>
                Register
              </StyledLink>
              <StyledLink>View</StyledLink>
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
        <Stack
          spacing={2}
          alignItems="center"
          sx={{ marginTop: 2, marginLeft: '50%' }}
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
