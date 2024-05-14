import { Button, Container, Title } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Container>
      <Title>Welcome to Event Academy</Title>
      <Button to={'/catalog'}>Let&apos;s Start</Button>
    </Container>
  );
};

export default WelcomePage;
