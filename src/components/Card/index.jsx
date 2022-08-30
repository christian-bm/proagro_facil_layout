import { StyledLi, StyedDiv, StyledSpan } from "./styles";
import { useModal } from "../../providers/modal";

const Card = ({ object }) => {
    const { setModalData, openCloseModalEdit } = useModal();

    const openModal = () => {
        openCloseModalEdit();
        setModalData(object);
    };

    return (
        <StyledLi id={object.id} onClick={openModal}>
            <StyedDiv>
                <h3>
                    {object.first_name} {object.last_name}
                </h3>
                <StyledSpan>{object.cpf}</StyledSpan>
            </StyedDiv>
            <StyedDiv>
                <StyledSpan>{object.email}</StyledSpan>
                <StyledSpan>{object.harvest_date}</StyledSpan>
            </StyedDiv>
        </StyledLi>
    );
};

export default Card;
