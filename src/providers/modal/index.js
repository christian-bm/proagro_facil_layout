import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isOpenModalCreate, setOpenModalCreate] = useState(false);
    const openCloseModalCreate = () => setOpenModalCreate(!isOpenModalCreate);

    const [isOpenModalEdit, setOpenModalEdit] = useState(false);
    const openCloseModalEdit = () => setOpenModalEdit(!isOpenModalEdit);

    const [modalData, setModalData] = useState({});

    return (
        <ModalContext.Provider
            value={{
                isOpenModalCreate,
                openCloseModalCreate,
                isOpenModalEdit,
                openCloseModalEdit,
                modalData,
                setModalData,
            }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
