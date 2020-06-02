import React from 'react';
// import Modal from "react-bootstrap/Modal";
import styles from '../Card/Card.module.css';
const Card=(props)=>{
    // const [isOpen, setIsOpen] = useState(false);

    // const showModal = () => {
    //     setIsOpen(true);
    // };

    // const hideModal = () => {
    //     setIsOpen(false);
    // };
    return(
        <div className={styles.card}>
            {/* eslint-disable-next-line */}
            <img className={styles.ImageStyle} src={props.imagePath} alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.contentPath}</p>
                <button onClick="" className={styles.buttonStyle}>View</button>
                {/* <button onClick={showModal}>Display Modal</button> */}
                {/* <>
                <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal Heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><p>Body content here</p></Modal.Body>
                    <Modal.Footer>
                        <button onClick={hideModal}>Cancel</button>
                        <button>Save</button>
                    </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
                </> */}
            </div>
        </div>
    );
}
export default Card;