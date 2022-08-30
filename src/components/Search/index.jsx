import { StyledDiv } from "./styles";
import { RiSearchLine } from "react-icons/ri";
import Button from "../Button";
import { useState } from "react";

const Search = ({ search }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <StyledDiv>
            <div>
                <RiSearchLine className='icon' />
                <input
                    value={inputValue}
                    placeholder='Digite o cpf'
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <Button onClick={() => search(inputValue)}>Procurar</Button>
        </StyledDiv>
    );
};

export default Search;
