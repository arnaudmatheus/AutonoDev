import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import './styles.scss';


const UserPage = () =>{
    return(
        <Container fluid id = "main-container">
            <Col id = "options">
                <Row noGutters id = "title-text">
                    <h1>Bem vindo,@Username</h1>
                </Row>
               <Row noGutters id = "first-options">
                    <Col id = "buscar" >
                        <h1>Buscar</h1>
                    </Col>
                    <Col id = "favoritos">
                        <h1>Favoritos</h1>
                    </Col>
               </Row>

               <Row noGutters id = "second-options">
                    <Col id = "Graficos">
                        <h1>Graficos</h1>
                    </Col>
                    <Col id = "Configs">
                        <h1>Configurações</h1>
                    </Col>
               </Row>
               
            </Col>
            

        </Container>
    );
};




export default UserPage;