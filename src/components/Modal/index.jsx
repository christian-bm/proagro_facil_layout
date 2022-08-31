import { ModalContainer } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ title, bodyContent, footerContent, closeModal }) => {
    return (
        <ModalContainer
            id='modal-bg'
            onClick={(e) => e.target.id === "modal-bg" && closeModal()}>
            <div id='modal-box' className='modal-box'>
                <div className='modal-header'>
                    <h3 className='title'>{title}</h3>
                    <span onClick={closeModal}>
                        <AiOutlineClose />
                    </span>
                </div>
                <div className='modal-body'>{bodyContent}</div>
                <div className='modal-footer'>{footerContent}</div>
            </div>
        </ModalContainer>
    );
};

export default Modal;
