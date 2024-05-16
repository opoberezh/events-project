import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectEvents, selectIsLoading } from '../redux/selectors';
import { useEffect, useState } from 'react';
import { eventActions } from '../redux/eventsSlice';

const EventList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectEvents);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 12;

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const prevPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  useEffect(() => {
    dispatch(eventActions.fetchEvents({ pageSize, pageNumber }));
  }, [dispatch, pageNumber]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
      <button onClick={prevPage} disabled={pageNumber === 0}>
        Previous
      </button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default EventList;
