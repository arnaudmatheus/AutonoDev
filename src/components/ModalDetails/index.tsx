import React from 'react';
import { Modal, ModalBody} from 'react-bootstrap';


interface ModalProps {
    show: boolean;
    handleClose(): any;
    title:string;
    authors?:string[];
    thumbnail?: string;
    description: string;
    publishedDate: string;
    categories?: string[];
    publisher?: string;
}



const ModalDetails: React.FC<ModalProps> = ({
    title,
    show,
    handleClose,
    thumbnail,
    authors,
    description,
    publishedDate,
    categories,
    publisher,
}:ModalProps) =>{
    return(
        <Modal id ='modal' show = {show} onHide = {handleClose}>
            <Modal.Header id = 'modal-header'>
                <Modal.Title>
                    {title}
                </Modal.Title>
                
            </Modal.Header>
            <ModalBody id = 'modal-body'>
            {(!!thumbnail)?<img src = {thumbnail} alt = 'Thumbnail' id = 'thumb' />:<img id = 'thumb' 
                    src = 'http://centrodametropole.fflch.usp.br/sites/centrodametropole.fflch.usp.br/files/user_files/livros/imagem/capa-no-book-cover.png' alt = 'NO cape'/>}
                {(!!description)?<p>{description}</p>:<p>Descrição não disponivel</p>}
                {(!!authors)?<p>Autores:{authors}</p>:<p>Autores não disponivel</p>}
            </ModalBody>
            <Modal.Footer>
                Publicado em : {publishedDate} 
            </Modal.Footer>
        </Modal>
    )
}



export default ModalDetails;
