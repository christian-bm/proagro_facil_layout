import Card from "../Card";
import Search from "../Search";
import { StyledUl, StyledDiv, StyledLi } from "./styles";
import { useLosses } from "../../providers/losses";
import { useModal } from "../../providers/modal";
import Button from "../Button";
import Pagination from "../Pagination";
import { useState } from "react";

const ListCards = () => {
    const { losses, totalLosses, getLossesByCpf, getLosses } = useLosses();
    const { openCloseModalCreate } = useModal();
    const [cpf, setCpf] = useState("");

    const search = (value) => {
        setCpf(value);
        if (value) {
            getLossesByCpf(value);
        } else {
            getLosses();
        }
    };

    return (
        <>
            <StyledDiv>
                <Search search={search} />
                <Button width='200px' onClick={openCloseModalCreate}>
                    Registrar nova perda
                </Button>
            </StyledDiv>
            <StyledUl>
                {losses.map((loss) => (
                    <Card key={loss.id} object={loss} />
                ))}
                {totalLosses === 0 && (
                    <StyledLi>
                        <span>Nenhuma perda registrada!</span>
                    </StyledLi>
                )}
            </StyledUl>
            <Pagination cpf={cpf} />
        </>
    );
};

export default ListCards;
