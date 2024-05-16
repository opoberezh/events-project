import EventList from '../../components/EventList/EventList';
import { Container, Block, Title } from './CatalogPage.styled';

const CatalogPage = () => {
  return (
    <Container>
      <Block>
        <Title>Events</Title>
        <EventList />
      </Block>
    </Container>
  );
};

export default CatalogPage;
