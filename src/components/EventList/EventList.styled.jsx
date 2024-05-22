import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 230px;
  height: 370px;
  padding: 10px;
  border: 2px solid #1256da;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow:
    0px 3px 1px rgba(0, 0, 0, 0.1),
    0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const DateOfEvent = styled.p`
  margin: 20px 0 0 0;
`;
export const Description = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px 20px;

  overflow: auto;
  transition: transform 0.3s ease;
  background-color: #1256da;
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  transform: translate(0, 100%);

  &:hover,
  &:focus {
    transform: translateY(0%);
  }
`;

export const Organizer = styled.p`
  margin: 20px 0 0 0;
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
`;

export const IconHand = styled.div`
  position: absolute;
  bottom: 2%;
  left: 0;
  transform: translate(50%, 50%);
`;

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 0;
`;
export const StyledLink = styled(Link)`
  color: #1e90ff;
`;

