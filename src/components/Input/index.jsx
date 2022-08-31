import { StyledDiv, StyledInput, StyledLabel, StyledSpan } from "./styles";

const Input = ({ label, register, name, error, mask, ...rest }) => {
    return (
        <StyledDiv>
            <div>
                <StyledLabel>{label}</StyledLabel>
                {error && <StyledSpan> - {error}</StyledSpan>}
            </div>
            <StyledInput
                onInput={(e) => {
                    if (mask) e.target.value = mask(e.target.value);
                }}
                {...register(name)}
                {...rest}
            />
        </StyledDiv>
    );
};

export default Input;
