import React from 'react';

import {
  Container,
  Title,
  TitleText,
  Subtitle,
  SubtitleText,
  LoginLine,
  LoginText,
  Button,
  Col,
} from './styles';

const LandingPage = () => {
  return (
    <Container>
      <Col>
        <TitleText>
          <Title>Fav</Title>
          <Title className="second">Books</Title>
        </TitleText>
        <Subtitle>
          <SubtitleText>Sua plataforma de consulta de livros</SubtitleText>
        </Subtitle>
        <LoginLine>
          <Button to="/user" style={{ textDecoration: 'none' }}>
            <LoginText>Entrar</LoginText>
          </Button>
        </LoginLine>
      </Col>
    </Container>
  );
};

export default LandingPage;
