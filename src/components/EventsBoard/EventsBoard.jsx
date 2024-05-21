import { useState, useEffect } from 'react';
import SortEvents from '../SortEvents/SortEvents';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvents } from '../redux/selectors';
import { fetchEvents } from '../redux/operations';
import EventList from '../EventList/EventList';

const sortEvents = (events, sortBy) => {
  if (sortBy === 'title') {
    return [...events].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'dateEvent') {
    return [...events].sort(
      (a, b) => new Date(a.dateEvent) - new Date(b.dateEvent)
    );
  } else if (sortBy === 'organizer') {
    return [...events].sort((a, b) => a.organizer.localeCompare(b.organizer));
  } else {
    return events;
  }
};

const EventsBoard = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);
  const [sortedEvents, setSortedEvents] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('title');

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  useEffect(() => {
    setSortedEvents(sortEvents(events, sortCriteria));
  }, [events, sortCriteria]);

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  return (
    <div>
      <SortEvents onSortChange={handleSortChange} />
      <EventList items={sortedEvents} />
    </div>
  );
};

export default EventsBoard;
