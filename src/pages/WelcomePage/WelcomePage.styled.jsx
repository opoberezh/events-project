import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;

  padding: 200px 200px;

  background-image: url(${hero});
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 0;
  margin-right: 10px;
  color: #ffffff;

  text-shadow:
    0 0px 40px #ffffff,
    0 0 50px #ffffff;
`;

export const Button = styled(Link)`
  display: flex;
  width: 140px;
  height: 4px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #1e90ff;
  color: #fff;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: uppercase;
  text-decoration: none;
  transition:
    color 0.3s,
    box-shadow 0,
    3s,
    background-color 0.3s;

  &:hover {
    box-shadow:
      10px 5px 5px rgba(255, 255, 255, 0.4),
      0px 15px 6px rgba(255, 255, 255, 0.1),
      0px 10px 20px rgba(255, 255, 255, 0.1);
  }
  &:active {
    background-color: #ffffff;
    color: #1e90ff;
  }
`;
