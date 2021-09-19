import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { ApplicationState } from '../../store';
import BookCards from '../../components/BookCard';
import './styles.scss';

const Favorite = () => {
  const arrayBooks = useSelector((store: ApplicationState) => store.books);

  return (
    <Container fluid id="principal">
      <div className="books">
        {arrayBooks?.books.length ? (
          arrayBooks.books.map(book => {
            return (
              <BookCards
                key={book.id}
                id={book.id}
                title={book.title}
                authors={book.authors}
                thumbnail={book.thumbnail}
                description={book.description}
                publishedDate={book.publishedDate}
                favorite={
                  arrayBooks.books.filter(boo => boo.id === book.id).length ===
                  0
                }
              />
            );
          })
        ) : (
          <h1>Você ainda não possui favoritos</h1>
        )}
      </div>
    </Container>
  );
};

export default Favorite;
