import React,{ useState, useCallback} from 'react';
import api from '../../services/api'
import BookCards from '../../components/BookCard';
import { Books,Container,Input} from './styles'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

interface BookData {

    id:string;
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
                const res = await api.get(`${searchInput}&startIndex=${startIndex}&maxResults=20`)
            
                setBooksFound(res.data.items)
                setItens(res.data?.totalItens)
                
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
        getBooks(pages+40)
    }

    const pageDecrement = () =>{
        if(pages === 0){
            return;
        }
        setPages(prevState => prevState - 40)
        getBooks(pages-40)
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
            <ButtonGroup >
                <Button onClick = {()=>{
                    pageIncrement()
                }}>Next</Button>
                <Button onClick = {()=>{
                    pageDecrement()
                }} >
                    prev
                </Button>
            </ButtonGroup>
            
            <Books numberOfCards={booksFound?.length} books={!!booksFound?.length}>
                {booksFound?.length
                ? booksFound.map(book => {
                    return (<BookCards
                            id = {book.id}
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