import React,{ useState, useCallback} from 'react';
import api from '../../services/api'
import BookCards from '../../components/BookCard';
import { Books,Container,Input} from './styles'
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
import { Pagination } from 'react-bootstrap';

interface BookData {

    volumeInfo: {
      title: string;
      categories?: string[];
      publisher?: string;
      authors: string[];
      description: string;
      infoLink: string;
      imageLinks?: {
        thumbnail: string;
      }
      publishedDate: string;
    }
}

const SearchPage = () => {
    const [searchInput,setSearchInput] = useState('harry')
    const [booksFound, setBooksFound] = useState<BookData[]>([])
    const [itens,setItens] = useState(0)
    const [pages,setPages] = useState(0)
    
    const getBooks = useCallback(async (startIndex:number) => {
            try {
                const res = await api.get(`${searchInput}&startIndex=${startIndex}&maxResults=40`)
            
                setBooksFound(res.data.items)
                setItens(res.data?.totalItens)
                
                console.log(res)
                
            } catch (err) { 
                setBooksFound([])
            console.log(err.message)
            }  
    }, [searchInput])
    
    const handleButtonClick = () => {
        
        setBooksFound([])
        getBooks(0)
    }
    const pageIncrement = () =>{
        if(pages + 40 > itens){
            return;
        }
        setPages(prevState => prevState + 40)
        getBooks(pages + 40)
    }
    

     
    return(
        <Container>
            <Input>
                <input
                    type="text"
                    value={searchInput}
                    placeholder="Book's title, author..."
                    onChange={(event) => setSearchInput(event.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleButtonClick()}
                />  
                    
            </Input>
            <Books numberOfCards={booksFound?.length} books={!!booksFound?.length}>
                {booksFound?.length
                ? booksFound.map(book => {
                    return (<BookCards
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            thumbnail = {book.volumeInfo.imageLinks?.thumbnail}
                            description = {book.volumeInfo.description}
                            publishedDate = {book.volumeInfo.publishedDate}
                        />
                        
                    )
                    }
                )
                : null}
            </Books>      
        </Container>
    )
}


export default SearchPage;