import { StyledDiv, StyledSelect } from "./styles";

const Select = ({ label, children, register, name, ...rest }) => {
    return (
        <StyledDiv>
            <label>{label}</label>
            <StyledSelect {...register(name)} {...rest}>
                {children}
            </StyledSelect>
        </StyledDiv>
    );
};

export default Select;
