import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModalDetails from '../ModalDetails';
import Typography from '@material-ui/core/Typography';
import { FavTypes } from '../../store/ducks/books/types';
import { toast } from 'react-toastify';

import './styles.scss';
import { BookActionsCreators } from '../../store/ducks/books';

interface BookProps {
  id: string;
  title: string;
  categories?: string[];
  publisher?: string;
  authors: string[];
  description: string;
  thumbnail?: string;
  publishedDate: string;
  favorite: boolean;
}

const BookCards: React.FC<BookProps> = ({
  id,
  title,
  thumbnail,
  authors,
  description,
  categories,
  publisher,
  publishedDate,
  favorite,
}: BookProps) => {
  const [details, setDeatails] = useState(false);
  const [fav, setFav] = useState(favorite);

  const handleClose = () => {
    setDeatails(false);
  };
  const handleOpening = () => {
    setDeatails(true);
  };

  const dispatch = useDispatch();

  const Handlefavorite = () => {
    if (fav === false) {
      dispatch({ type: FavTypes.REMOVE_BOOKS, payload: { id } });
      setFav(true);

      toast('Livro removido do favoritos com sucesso', { type: 'success' });
    } else {
      // dispatch({type: FavTypes.ADD_BOOKS,payload:{id,title,thumbnail,authors,description,categories,publisher,publishedDate}});
      dispatch(
        BookActionsCreators.addBookToFav.request({
          id,
          title,
          thumbnail,
          authors,
          description,
          categories,
          publisher,
          publishedDate,
        }),
      );
      toast('Livro adicionado ao favoritos com sucesso', { type: 'success' });
      setFav(false);
    }
  };

  const RemoveFav = () => {
    dispatch({ type: FavTypes.REMOVE_BOOKS, payload: { id } });
    setFav(true);
  };

  return (
    <Card className="card">
      <ModalDetails
        show={details}
        handleClose={handleClose}
        title={title}
        authors={authors}
        thumbnail={thumbnail}
        description={description}
        categories={categories}
        publishedDate={publishedDate}
        publisher={publisher}
      />
      <div className="header">
        <Typography variant="h6" noWrap={true}>
          {title}
        </Typography>
      </div>
      {!!thumbnail ? (
        <img src={thumbnail} alt="Thumbnail" className="img" />
      ) : (
        <img
          className="img"
          src="http://centrodametropole.fflch.usp.br/sites/centrodametropole.fflch.usp.br/files/user_files/livros/imagem/capa-no-book-cover.png"
          alt="NO cape"
        />
      )}
      <CardContent>
        {favorite ? (
          <FavoriteIcon onClick={Handlefavorite} />
        ) : (
          <FavoriteIcon color="primary" onClick={RemoveFav} />
        )}
        <button
          className="details"
          title="detalhes"
          onClick={() => {
            handleOpening();
          }}
        >
          Detalhes
        </button>
      </CardContent>
    </Card>
  );
};

export default BookCards;
