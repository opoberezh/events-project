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
} from './EventList.styled';

const theme = createTheme({
  palette: {
    darkOrange: {
      main: '#FF8C00',
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

  // const nextPage = () => setPageNumber((prevPage) => prevPage + 1);
  // const prevPage = () => setPageNumber((prevPage) => Math.max(prevPage - 1, 0));

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
            <h2>{item.title}</h2>
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
            <IconHand>
              <PanToolAltIcon style={{ fill: '#ffffff' }} />
            </IconHand>
          </EventCard>
        ))}
        <Stack spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
          <Pagination
            count={3}
            page={pageNumber + 1}
            color="darkOrange"
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
