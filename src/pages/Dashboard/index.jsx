import Header from "../../components/Header";
import ListCards from "../../components/ListCards";
import ModalCreate from "../../components/ModalCreate";
import ModalEdit from "../../components/ModalEdit";
import { useModal } from "../../providers/modal";
import { StyledMain } from "./styles";

const Dashboard = () => {
    const { isOpenModalCreate, isOpenModalEdit } = useModal();

    return (
        <>
            <Header />
            <StyledMain>
                <ListCards />
            </StyledMain>
            {isOpenModalCreate && <ModalCreate />}
            {isOpenModalEdit && <ModalEdit />}
        </>
    );
};

export default Dashboard;
