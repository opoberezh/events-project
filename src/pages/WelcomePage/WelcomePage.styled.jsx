import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import hero from '../../assets/rock.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding: 250px 0 0 463px;

  background-image: url(${hero});
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 42px;
  margin: 0;
  margin-right: 10px;
  color: #fff;

  text-shadow:
    0 0px 40px #000000,
    0 0 50px #000000;
`;

export const Button = styled(Link)`
  display: flex;
  width: 140px;
  height: 4px;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #1256da;
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

  &:hover,
  &:focus {
    background-color: #1e90ff;
    box-shadow:
      10px 5px 5px rgba(0, 0, 0, 0.4),
      0px 15px 6px rgba(0, 0, 0, 0.1),
      0px 10px 20px rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: #ffffff;
    color: #1e90ff;
  }
`;
