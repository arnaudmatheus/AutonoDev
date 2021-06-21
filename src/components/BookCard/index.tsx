import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModalDetails from '../ModalDetails';
import './styles.scss'

interface BookProps{
    title: string;
    categories?: string[];
    publisher?: string;
    authors: string[];
    description: string;
    thumbnail?: string;
    publishedDate: string;
}


const BookCards: React.FC<BookProps> = ({
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
            <CardHeader title = {title} subheader = {authors} />
            <img src = {thumbnail} alt = 'Thumbnail'></img>
            <CardContent>
                <FavoriteIcon/>
                <button title = 'detalhes' onClick ={ () => {
                    handleOpening();
                }}/>
            </CardContent>
       </Card>
   )

}






export default BookCards