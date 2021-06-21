import React from 'react';
import { useSelector } from 'react-redux';
import { Books,Container} from './styles'
import store,{ApplicationState} from '../../store';
import BookCards from '../../components/BookCard'


const Favorite = () => {
    const arrayBooks = useSelector((store:ApplicationState) => store.books)


    return(
        <Container>
            <Books numberOfCards={arrayBooks?.books.length} books={!!arrayBooks?.books.length}>
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
            </Books>     
        </Container>
    )
}


export default Favorite;