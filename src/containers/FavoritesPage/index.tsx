import React from 'react';
import { useSelector } from 'react-redux';
import {Container} from 'react-bootstrap'
import store,{ApplicationState} from '../../store';
import BookCards from '../../components/BookCard'
import './styles.scss';

const Favorite = () => {
    const arrayBooks = useSelector((store:ApplicationState) => store.books)


    return(
        <Container fluid id = 'principal'>
            <div className = 'books'>
                {arrayBooks?.books.length
                ? arrayBooks.books.map(book => {
                    return (<BookCards
                            id = {book.id}
                            title={book.title}
                            authors={book.authors}
                            thumbnail = {book.thumbnail}
                            description = {book.description}
                            publishedDate = {book.publishedDate}
                        />
                        
                    )
                    }
                )
                : null}




            </div>
               
        </Container>
    )
}


export default Favorite;