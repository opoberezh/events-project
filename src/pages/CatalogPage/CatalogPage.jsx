import EventsBoard from '../../components/EventsBoard/EventsBoard';

import { Container, Block, Title } from './CatalogPage.styled';

const CatalogPage = () => {
  return (
    <Container>
      <Block>
        <Title>Events</Title>
        <EventsBoard />
      </Block>
    </Container>
  );
};

export default CatalogPage;
