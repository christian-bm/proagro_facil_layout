import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    color: var(--cl-white);
    background-color: ${(props) =>
        props.isSec
            ? "var(--cl-red)"
            : props.isTer
            ? "var(--cl-grey4)"
            : "var(--cl-green)"};
    border-radius: 8px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    height: 40px;
    width: ${(props) => (props.width ? props.width : "100px")};
`;
