import React from 'react';
import { Container,Row,Col,Button} from 'react-bootstrap';
import './styles.scss';


const LandingPage = () =>{
    return(
        <Container fluid id = "main-container">
            <Col id = "title">
                <Row noGutters id = "title-text">
                    <h1>Bem vindo ao FavBooks</h1>
                </Row>
                <Row noGutters id = "subtitle-text">
                    <h3>Sua plataforma de consulta de livros</h3>
                </Row>
                <Row noGutters id = "login-line">
                    <Button className = "login"/>

                </Row>
            </Col>
            

        </Container>
    );
};




export default LandingPage;