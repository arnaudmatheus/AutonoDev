import React, { useState, useCallback, useEffect } from 'react';
import api from '../../services/api';
import BookCards from '../../components/BookCard';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';

import './styles.scss';
interface BookData {
  id: string;
  volumeInfo: {
    title: string;
    categories?: string[];
    publisher?: string;
    authors: string[];
    description: string;
    infoLink: string;
    imageLinks?: {
      thumbnail: string;
    };
    publishedDate: string;
  };
}

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [booksFound, setBooksFound] = useState<BookData[]>([]);
  const [itens, setItens] = useState(0);
  const [pages, setPages] = useState(0);
  const arrayBooks = useSelector((store: ApplicationState) => store.books);

  //Get books and totalItens
  const getBooks = useCallback(
    async (startIndex: number) => {
      try {
        const res = await api.get(
          `${searchInput}&startIndex=${startIndex}&maxResults=20`,
        );

        setBooksFound(res.data.items);
        setItens(res.data?.totalItens);
      } catch (err) {
        setBooksFound([]);
        console.log(err);
      }
    },
    [searchInput],
  );

  const handleButtonClick = () => {
    setBooksFound([]);
    getBooks(0);
  };

  //Pagination
  const pageIncrement = () => {
    if (pages + 20 > itens) {
      return;
    }
    getBooks(pages + 20);
    setPages(prevState => prevState + 20);
  };

  const pageDecrement = () => {
    if (pages === 0) {
      return;
    }
    getBooks(pages - 20);
    setPages(prevState => prevState - 20);
  };

  return (
    <Container fluid id="principal-container">
      <input
        id="input"
        type="text"
        value={searchInput}
        placeholder="Book's title, author..."
        onChange={event => setSearchInput(event.target.value)}
        onKeyPress={e => e.key === 'Enter' && handleButtonClick()}
      />

      <div id="buttons">
        <button
          id="button"
          onClick={() => {
            pageIncrement();
          }}
        >
          {' '}
          Prev{' '}
        </button>

        <button
          id="button"
          onClick={() => {
            pageDecrement();
          }}
        >
          Next
        </button>
      </div>

      <div className="books">
        {booksFound?.length
          ? booksFound.map(book => {
              return (
                <BookCards
                  id={book.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                  description={book.volumeInfo.description}
                  publishedDate={book.volumeInfo.publishedDate}
                  favorite={
                    arrayBooks.books.filter(boo => boo.id === book.id)
                      .length === 0
                  }
                />
              );
            })
          : null}
      </div>
    </Container>
  );
};

export default SearchPage;
