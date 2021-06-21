import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModalDetails from '../ModalDetails';
import Typography from '@material-ui/core/Typography';
import { FavTypes } from '../../store/ducks/books/types';
import './styles.scss'

interface BookProps{
    id:string;
    title: string;
    categories?: string[];
    publisher?: string;
    authors: string[];
    description: string;
    thumbnail?: string;
    publishedDate: string;
}


const BookCards: React.FC<BookProps> = ({
    id,
    title,
    thumbnail,
    authors,
    description,
    categories,
    publisher,
    publishedDate
}:BookProps) => {
    const [details,setDeatails] = useState(false)
    
    const handleClose = () =>{
        setDeatails(false)
    }
    const handleOpening = () =>{
        setDeatails(true)
    }

    const dispatch = useDispatch();
    
    const favorite = () => {
        dispatch({type: FavTypes.ADD_BOOKS,payload:{id,title,thumbnail,authors,description,categories,publisher,publishedDate}})
    }
    
    return(
    
            <Card className = "card">
                <ModalDetails
                    show = {details}
                    handleClose = {handleClose}
                    title = {title}
                    authors = {authors}
                    thumbnail = {thumbnail}
                    description = {description}
                    categories = {categories}
                    publishedDate = {publishedDate}
                    publisher = {publisher}
                    />
                <div className = 'header'>
                    <Typography variant = "h6" noWrap = {true}>{title}</Typography>    
                </div>
                <img src = {thumbnail} alt = 'Thumbnail' className = 'img'></img>
                <CardContent>
                    <FavoriteIcon/>
                    <button className='details' title = 'detalhes' onClick ={ () => {
                        handleOpening();
                        favorite();
                    }}/>
                </CardContent>
        </Card>
        
   )

}






export default BookCards