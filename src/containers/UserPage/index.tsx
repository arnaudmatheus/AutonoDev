import React from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.scss';


const UserPage = () =>{
    return(
        <Container fluid id = "main-container2">
            <Col id = "options">
                <Row noGutters id = "title-text">
                    <h1>Bem vindo,@Username</h1>
                </Row>
               <Row noGutters id = "first-options">
                    <Link to = '/search' className = 'buscar'/>
                    
                    <Link to = '/fav' className = 'favoritos'/>
                    
                    
               </Row>

               
            </Col>
            

        </Container>
    );
};




export default UserPage;