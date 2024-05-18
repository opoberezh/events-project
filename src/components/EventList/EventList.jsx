import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectEvents, selectIsLoading } from '../redux/selectors';
import { eventActions } from '../redux/eventsSlice';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.img} loading="lazy" alt={item.title} />
          <p>{item.description}</p>
          <p>{item.eventDate}</p>
          <p>{item.organizer}</p>
        </div>
      ))}
      <Stack spacing={2} alignItems="center" sx={{ marginTop: 4 }}>
        <Pagination
          count={3}
          page={pageNumber + 1}
          onChange={(event, value) => setPageNumber(value - 1)}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default EventList;
