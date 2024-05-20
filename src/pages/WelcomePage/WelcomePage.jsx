import { Button, Container, Title, Wrapper } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Welcome to Event Academy</Title>
        <Button to={'/catalog'}>Let&apos;s Start</Button>
      </Wrapper>
    </Container>
  );
};

export default WelcomePage;
