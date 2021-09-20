import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: var(--primary_color);
`;

export const Col = styled.div`
  align-self: center;
  margin: 0 auto;
`;

export const TitleText = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  &.second {
    color: var(--secondary_color);
  }
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
`;
export const SubtitleText = styled.h3`
  color: white;
  font-size: 1.5rem;
`;
export const LoginLine = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(Link)`
  width: 10rem;
  height: 2rem;
  border-radius: 15px;
  background-color: var(--secondary_color);
  text-decoration: none;
  &::hover {
    text-decoration: none;
  }
`;

export const LoginText = styled.h3`
  text-decoration-line: none;
  text-decoration: none;
  display: flex;
  color: white;
  padding-left: 2.8rem;
`;
