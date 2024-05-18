import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 230px;
  height: 350px;
  padding: 10px;
  border: 2px solid #ff8c00;
  // margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const DateOfEvent = styled.p`
  margin: 10px 0 0 0;
`;
export const Description = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;

  overflow: auto;
  transition: transform 0.3s ease;
  background-color: #ff8c00;
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
  margin: 10px 0 0 0;
  font-style: italic;
  font-weight: 600;
  font-size: 18px;
`;
