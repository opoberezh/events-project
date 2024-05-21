// import EventList from '../../components/EventList/EventList';
import EventsBoard from '../../components/EventsBoard/EventsBoard';
// import SortEvents from '../../components/SortEvents/SortEvents';
import { Container, Block, Title } from './CatalogPage.styled';

const CatalogPage = () => {
  return (
    <Container>
      <Block>
        <Title>Events</Title>
        <EventsBoard />
        {/* <EventList /> */}
      </Block>
    </Container>
  );
};

export default CatalogPage;
