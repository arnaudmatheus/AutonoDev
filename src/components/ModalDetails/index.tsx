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
        <Modal show = {show} onHide = {handleClose}>
            <Modal.Header>
                <Modal.Title>
                    {title}
                </Modal.Title>
                
            </Modal.Header>
            <ModalBody>
                <img src = {thumbnail}></img>
                <p>{description}</p>
            </ModalBody>
            <Modal.Footer>
                Publicado em : {publishedDate}
            </Modal.Footer>
        </Modal>
    )
}



export default ModalDetails;
